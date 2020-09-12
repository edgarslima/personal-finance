'use strict';
const express = require('express');
const accountController = require('./controllers/accountController');
const accountTypeController = require('./controllers/accountTypeController');
const userController = require('./controllers/userController');
const groupUserController = require('./controllers/groupUserController');
const budgetGroupController = require('./controllers/budgetGroupController');
const chartOfAccountsController = require('./controllers/chartOfAccountsController');
const budgetController = require('./controllers/budgetController');
const leadgerEntiriresController = require('./controllers/leadgerEntiriresController');

const routes = express.Router();

routes.get('/user', userController.index);
routes.get('/user/:usr_key', userController.record);
routes.post('/user', userController.create);
routes.delete('/user/:usr_key', userController.delete);
routes.put('/user/:usr_key', userController.update);

routes.get('/group_user', groupUserController.index);
routes.get('/group_user/:id', groupUserController.record);
routes.post('/group_user', groupUserController.create);
routes.delete('/group_user/:id', groupUserController.delete);
routes.put('/group_user/:id', groupUserController.update);



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

routes.get('/budget_group', budgetGroupController.index);
routes.get('/budget_group/:id', budgetGroupController.record);
routes.post('/budget_group', budgetGroupController.create);
routes.delete('/budget_group/:id', budgetGroupController.delete);
routes.put('/budget_group/:id', budgetGroupController.update);

routes.get('/budget_group', budgetGroupController.index);
routes.get('/budget_group/:id', budgetGroupController.record);
routes.post('/budget_group', budgetGroupController.create);
routes.delete('/budget_group/:id', budgetGroupController.delete);
routes.put('/budget_group/:id', budgetGroupController.update);

routes.get('/chart_of_accounts', chartOfAccountsController.index);
routes.get('/chart_of_accounts/:id', chartOfAccountsController.record);
routes.post('/chart_of_accounts', chartOfAccountsController.create);
routes.delete('/chart_of_accounts/:id', chartOfAccountsController.delete);
routes.put('/chart_of_accounts/:id', chartOfAccountsController.update);

routes.get('/budget', budgetController.index);
routes.get('/budget/:id', budgetController.record);
routes.post('/budget', budgetController.create);
routes.delete('/budget/:id', budgetController.delete);
routes.put('/budget/:id', budgetController.update);


routes.get('/ledger_entries', leadgerEntiriresController.index);
routes.get('/ledger_entries/:id', leadgerEntiriresController.record);
routes.post('/ledger_entries', leadgerEntiriresController.create);
routes.delete('/ledger_entries/:id', leadgerEntiriresController.delete);
routes.put('/ledger_entries/:id', leadgerEntiriresController.update);


module.exports = routes;
