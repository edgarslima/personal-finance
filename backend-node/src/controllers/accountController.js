const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM accounts',);
        console.log(accounts);

        return response.json(accounts);
    },

    async record (request, response) {
        const {id} = request.params;

        const accounts = await pool.query('SELECT * FROM accounts WHERE acc_id = ?', [id]);
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
        const strQuery = 'DELETE accounts WHERE acc_id = ? '

        await pool.query(strQuery, [id]);

    },

}