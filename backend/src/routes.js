const express = require('express');
const routes = express.Router();

const SessionController = require('./controllers/SessionController.js');
const CostumerController = require('./controllers/CostumerController.js');
const AttendancesController = require('./controllers/AttendancesController.js');


routes.get('/login/:name', SessionController.login);
routes.post('/login', SessionController.store);

// routes.get('/newattendance', CostumerController.show);
// routes.put('/newattendance', CostumerController.store);
routes.get('/newattendance/:idLogin', AttendancesController.show);
routes.post('/newattendance', AttendancesController.store);

module.exports = routes;
