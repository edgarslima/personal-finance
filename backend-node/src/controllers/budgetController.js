const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM budget',);
        response.status = 200;
        return response.json(accounts);
    },

    async record (request, response) {
        const {id} = request.params;
        const users = await pool.query('SELECT * FROM budget WHERE bud_id = ? ', [id]);
        response.status = 200;
        return response.json(users);
    },

    async create (request, response) {
        const {bud_chaacc_id, bud_acc_id, bud_budgrp_id, bud_description, bud_value, bud_day, bud_grpusr_id, bud_status} = request.body;
        var strQuery = 'INSERT INTO budget (bud_chaacc_id, bud_acc_id, bud_budgrp_id, bud_description, bud_value, bud_day, bud_grpusr_id, bud_status, bud_creation) ';
        strQuery += 'VALUES (?, ?, ?, ?, ?, ?, ?, ?, now() )';
        await pool.query(strQuery, [bud_chaacc_id, bud_acc_id, bud_budgrp_id, bud_description, bud_value, bud_day, bud_grpusr_id, bud_status]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async delete (request, response) {
        const {id} = request.params;
        const strQuery = 'DELETE FROM budget WHERE bud_id = ? ';
        await pool.query(strQuery, [id]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async update (request, response) {
        const {id} = request.params;
        const {bud_chaacc_id, bud_acc_id, bud_budgrp_id, bud_description, bud_value, bud_day, bud_grpusr_id, bud_status} = request.body;
        var strQuery = 'UPDATE budget SET bud_chaacc_id = ?, bud_acc_id = ?, bud_budgrp_id = ?, bud_description = ?, bud_value = ?, bud_day = ?, bud_grpusr_id = ?, bud_status =? ';
        strQuery += ' WHERE bud_id = ? ';
        await pool.query(strQuery, [bud_chaacc_id, bud_acc_id, bud_budgrp_id, bud_description, bud_value, bud_day, bud_grpusr_id, bud_status, id]);
        response.status = 200;
        return response.json({"status": "OK"})
    }

}
