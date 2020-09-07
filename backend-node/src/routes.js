'use strict';
const express = require('express');
const accountController = require('./controllers/accountController');
const accountTypeController = require('./controllers/accountTypeController');
const userController = require('./controllers/userController');

const routes = express.Router();

routes.get('/user', userController.index);
routes.get('/user/:usr_key', userController.record);
routes.post('/user', userController.create);
routes.delete('/user/:usr_key', userController.delete);
routes.put('/user/:usr_key', userController.update);


routes.get('/accounts', accountController.index);
routes.get('/accounts/:id', accountController.record);
routes.post('/accounts', accountController.create);
routes.delete('/accounts/:id', accountController.delete);
routes.put('/accounts/:id', accountController.update);

routes.get('/account_type', accountTypeController.index);
routes.get('/account_type/:id', accountTypeController.record);
routes.post('/account_type', accountTypeController.create);
routes.delete('/account_type/:id', accountTypeController.delete);
routes.put('/account_type/:id', accountTypeController.update);

module.exports = routes;

