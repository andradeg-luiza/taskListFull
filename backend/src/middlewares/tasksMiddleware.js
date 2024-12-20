const validadeFieldTitle = (request, response, next) => {
    const { body } = request;

    if (body.title === undefined) {
        return response.status(400).json({ message: 'The field "title" is required' });
    };
    if (body.title === "") {
        return response.status(400).json({ message: 'Title cannot be empty' });
    };
    next();
};

const validadeFieldDeadline = (request, response, next) => {
    const { body } = request;

    if (body.deadline === undefined) {
        return response.status(400).json({ message: 'The field "deadline" is required' });
    };
    if (body.deadline === "") {
        return response.status(400).json({ message: 'Deadline cannot be empty' });
    };
    next();
};

const validadeFieldStatus = (request, response, next) => {
    const { body } = request;

    if (body.status === undefined) {
        return response.status(400).json({ message: 'The field "status" is required' });
    };
    if (body.status === "") {
        return response.status(400).json({ message: 'Status cannot be empty' });
    };
    next();
};


module.exports = {
    validadeFieldTitle,
    validadeFieldDeadline,
    validadeFieldStatus
};