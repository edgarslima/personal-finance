'use strict';
const express = require('express');
const accountController = require('./controllers/accountController');

const routes = express.Router();

routes.get('/accounts', accountController.index);
routes.get('/accounts/:id', accountController.record);
routes.post('/accounts', accountController.create);

module.exports = routes;

