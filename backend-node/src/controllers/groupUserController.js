const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM group_users',);
        response.status = 200;
        return response.json(accounts);
    },

    async record (request, response) {
        const {id} = request.params;
        const users = await pool.query('SELECT * FROM group_users WHERE grpusr_id = ? ', [id]);
        response.status = 200;
        return response.json(users);
    },

    async create (request, response) {
        const {grpusr_name, grpusr_description, grpusr_status} = request.body;
        var strQuery = 'INSERT INTO group_users (grpusr_name, grpusr_description, grpusr_status, grpusr_creation) ';
        strQuery += 'VALUES (?, ?, ?, now()) ';
        await pool.query(strQuery, [grpusr_name, grpusr_description, grpusr_status]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async delete (request, response) {
        const {id} = request.params;
        const strQuery = 'DELETE FROM group_users WHERE grpusr_id = ? ';
        await pool.query(strQuery, [id]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async update (request, response) {
        const {id} = request.params;
        const {grpusr_name, grpusr_description, grpusr_status} = request.body;
        var strQuery = 'UPDATE group_users SET grpusr_name = ?, grpusr_description = ?, grpusr_status = ?  ';
        strQuery += ' WHERE grpusr_id = ? ';
        await pool.query(strQuery, [grpusr_name, grpusr_description, grpusr_status, id]);
        response.status = 200;
        return response.json({"status": "OK"})
    }

}