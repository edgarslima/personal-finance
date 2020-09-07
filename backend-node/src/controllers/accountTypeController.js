const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM account_type',);
        response.status = 200;
        return response.json(accounts);
    },

    async record (request, response) {
        const {id} = request.params;
        const accounts = await pool.query('SELECT * FROM account_type WHERE acctyp_id = ?', [id]);
        response.status = 200;
        return response.json(accounts);
    },

    async create (request, response) {
        const {acctyp_name, acctyp_description, acctyp_nature, acctyp_grpusr_id, acctyp_status} = request.body;
        var strQuery = 'INSERT INTO account_type (acctyp_name, acctyp_description, acctyp_nature, acctyp_grpusr_id, acctyp_status, acctyp_creation) ';
        strQuery += 'values (?, ?, ?, ?, ?, now()) ';
        await pool.query(strQuery, [acctyp_name, acctyp_description, acctyp_nature, acctyp_grpusr_id, acctyp_status]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async delete (request, response) {
        const {id} = request.params;
        const strQuery = 'DELETE FROM account_type WHERE acctyp_id = ? '
        await pool.query(strQuery, [id]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async update (request, response) {
        const {id} = request.params;
        const {acctyp_name, acctyp_description, acctyp_nature, acctyp_grpusr_id, acctyp_status} = request.body;
        var strQuery = 'UPDATE account_type SET acctyp_name = ?, acctyp_description = ?, acctyp_nature = ?, acctyp_grpusr_id = ?, acctyp_status = ?  ';
        strQuery += ' WHERE acctyp_id = ? ';
        await pool.query(strQuery, [acctyp_name, acctyp_description, acctyp_nature, acctyp_grpusr_id, acctyp_status, id]);
        response.status = 200;
        return response.json({"status": "OK"})
    }

}