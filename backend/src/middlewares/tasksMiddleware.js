const validadeTitle = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        return response.status(400).json({ message: 'The field "title" is required' });
    };
    if (body.title === "") {
        return response.status(400).json({ message: 'Title cannot be empty' });
    };
    next();
};

const validadeDeadline = (request, response, next) => {
    const { body } = request;

    if (body.deadline === undefined) {
        return response.status(400).json({ message: 'The field "deadline" is required' });
    };
    if (body.deadline === "") {
        return response.status(400).json({ message: 'Deadline cannot be empty' });
    };
    next();
};


module.exports = {
    validadeTitle,
    validadeDeadline
};