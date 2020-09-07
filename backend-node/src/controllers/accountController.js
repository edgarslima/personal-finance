const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM accounts',);
        response.status = 200;
        return response.json(accounts);
    },

    async record (request, response) {
        const {id} = request.params;
        const accounts = await pool.query('SELECT * FROM accounts WHERE acc_id = ?', [id]);
        response.status = 200;
        return response.json(accounts);
    },

    async create (request, response) {
        const {acc_name, acc_grpusr_id, acc_status} = request.body;
        var strQuery = 'INSERT INTO accounts (acc_name, acc_grpusr_id, acc_status, acc_creation) ';
        strQuery += 'values (?, ?, ?, now()) ';
        await pool.query(strQuery, [acc_name, acc_grpusr_id, acc_status]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async delete (request, response) {
        const {id} = request.params;
        const strQuery = 'DELETE FROM accounts WHERE acc_id = ? ';
        await pool.query(strQuery, [id]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async update (request, response) {
        const {id} = request.params;
        const {acc_name, acc_grpusr_id, acc_status} = request.body;
        var strQuery = 'UPDATE accounts SET acc_name = ?, acc_grpusr_id = ?, acc_status = ?  ';
        strQuery += ' WHERE acc_id = ? ';
        await pool.query(strQuery, [acc_name, acc_grpusr_id, acc_status, id]);
        response.status = 200;
        return response.json({"status": "OK"})
    }

}