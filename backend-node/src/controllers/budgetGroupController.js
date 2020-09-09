const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM budget_group',);
        response.status = 200;
        return response.json(accounts);
    },

    async record (request, response) {
        const {id} = request.params;
        const users = await pool.query('SELECT * FROM budget_group WHERE budgrp_id = ? ', [id]);
        response.status = 200;
        return response.json(users);
    },

    async create (request, response) {
        const {budgrp_name, budgrp_grpusr_id, budgrp_status} = request.body;
        var strQuery = 'INSERT INTO budget_group (budgrp_name, budgrp_grpusr_id, budgrp_status, budgrp_creation) ';
        strQuery += 'VALUES (?, ?, ?, now()) ';
        await pool.query(strQuery, [budgrp_name, budgrp_grpusr_id, budgrp_status]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async delete (request, response) {
        const {id} = request.params;
        const strQuery = 'DELETE FROM budget_group WHERE budgrp_id = ? ';
        await pool.query(strQuery, [id]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async update (request, response) {
        const {id} = request.params;
        const {budgrp_name, budgrp_grpusr_id, budgrp_status} = request.body;
        var strQuery = 'UPDATE budget_group SET budgrp_name = ?, budgrp_grpusr_id = ?, budgrp_status = ?  ';
        strQuery += ' WHERE budgrp_id = ? ';
        await pool.query(strQuery, [budgrp_name, budgrp_grpusr_id, budgrp_status, id]);
        response.status = 200;
        return response.json({"status": "OK"})
    }

}
