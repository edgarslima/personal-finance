const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM chart_of_accounts',);
        response.status = 200;
        return response.json(accounts);
    },

    async record (request, response) {
        const {id} = request.params;
        const users = await pool.query('SELECT * FROM chart_of_accounts WHERE chaacc_id = ? ', [id]);
        response.status = 200;
        return response.json(users);
    },

    async create (request, response) {
        const {chaacc_acctyp_id, chaacc_name, chaacc_grpusr_id} = request.body;
        var strQuery = 'INSERT INTO chart_of_accounts (chaacc_acctyp_id, chaacc_name, chaacc_grpusr_id) ';
        strQuery += 'VALUES (?, ?, ? )';
        await pool.query(strQuery, [chaacc_acctyp_id, chaacc_name, chaacc_grpusr_id]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async delete (request, response) {
        const {id} = request.params;
        const strQuery = 'DELETE FROM chart_of_accounts WHERE chaacc_id = ? ';
        await pool.query(strQuery, [id]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async update (request, response) {
        const {id} = request.params;
        const {chaacc_acctyp_id, chaacc_name, chaacc_grpusr_id} = request.body;
        var strQuery = 'UPDATE chart_of_accounts SET chaacc_acctyp_id = ?, chaacc_name = ?, chaacc_grpusr_id = ? ';
        strQuery += ' WHERE chaacc_id = ? ';
        await pool.query(strQuery, [chaacc_acctyp_id, chaacc_name, chaacc_grpusr_id, id]);
        response.status = 200;
        return response.json({"status": "OK"})
    }

}
