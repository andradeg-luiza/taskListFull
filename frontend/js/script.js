//TODO alterar os títulos da tabela para poder filtrar no futuro ou reordenar por ID
//TODO adicionar mensagem de erro do backend quando os campos tarefa e prazo estiverem vazio

const tbody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');
const inputDeadline = document.querySelector('.input-deadline');

const API_URL = 'http://localhost:3333/tasks';

const fetchTasks = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

const addTask = async (event) => {
    event.preventDefault();

    const task = { 
        title: inputTask.value, 
        deadline: inputDeadline.value 
    };

    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });

    loadTasks();
    resetInputFields();
};

const deleteTask = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    loadTasks();
};

const updateTask = async ({ id, title, status }) => {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, status })
    });
    loadTasks();
};

const formatDate = (dateUTC) => {
    const options = { dateStyle: 'short', timeStyle: 'short' };
    return new Date(dateUTC).toLocaleString('pt-br', options);
};

const createElement = (tag, innerText = '', innerHTML = '') => {
    const element = document.createElement(tag);
    if (innerText) element.innerText = innerText;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
};

const createSelect = (value) => {
    const options = `
        <option value="Nova">nova</option>
        <option value="pendente">pendente</option>
        <option value="em_andamento">em andamento</option>
        <option value="atrasada">atrasada</option>
        <option value="concluida">concluída</option>
    `;
    const select = createElement('select', '', options);
    select.value = value;
    return select;
};

const createRow = (task) => {
    const { id, title, deadline, status, create_at } = task;

    const tr = createElement('tr');
    const tdID = createElement('td', id);
    const tdTitle = createElement('td', title);
    const tdDeadline = createElement('td', deadline);
    const tdCreatedAt = createElement('td', formatDate(create_at));
    const tdStatus = createElement('td');
    const tdActions = createElement('td');
    
    const select = createSelect(status);
    select.addEventListener('change', ({ target }) => updateTask({ ...task, status: target.value }));

    const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>');
    const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>');

    const editForm = createElement('form');
    const editInput = createElement('input');
    editInput.value = title;
    editForm.appendChild(editInput);

    editForm.addEventListener('submit', (event) => {
        event.preventDefault();
        updateTask({ id, title: editInput.value, status });
    });

    editButton.addEventListener('click', () => {
        tdTitle.innerText = '';
        tdTitle.appendChild(editForm);
    });

    editButton.classList.add('btn-action');
    deleteButton.classList.add('btn-action');
    deleteButton.addEventListener('click', () => deleteTask(id));

    tdStatus.appendChild(select);
    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    tr.appendChild(tdID);
    tr.appendChild(tdTitle);
    tr.appendChild(tdDeadline);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);

    return tr;
};

const loadTasks = async () => {
    const tasks = await fetchTasks();
    tbody.innerHTML = '';
    tasks.forEach((task) => {
        const tr = createRow(task);
        tbody.appendChild(tr);
    });
};

const resetInputFields = () => {
    inputTask.value = '';
    inputDeadline.value = '';
};

addForm.addEventListener('submit', addTask);
loadTasks();
