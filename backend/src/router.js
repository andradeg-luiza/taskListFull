const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');
const tasksMiddleware = require('./middlewares/tasksMiddleware');


router.get('/tasks', tasksController.getAll);
router.post('/tasks', tasksMiddleware.validadeTitle, tasksMiddleware.validadeDeadline,tasksController.createTask);

module.exports = router;
