const connection = require('./conecction');

const getAll = async () => {
    const [tasks] = await connection.execute('SELECT * FROM tasks');
    return tasks;
};

const createTask = async (task) => {
    const { title, deadline } = task;
    const query = 'INSERT INTO tasks(title, status, deadline, create_at) VALUES (?, ?, ?, ?)';
    const dateUTC = new Date(Date.now()).toUTCString();
    const [createdTask] = await connection.execute(query, [title, "Pendente", deadline, dateUTC]);
    return {insertId: createdTask.insertId};
};

module.exports = {
    getAll,
    createTask
};