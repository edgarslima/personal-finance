const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM users',);
        response.status = 200;
        return response.json(accounts);
    },

    async record (request, response) {
        const {usr_key} = request.params;
        console.log([usr_key]);
        const users = await pool.query('SELECT * FROM users WHERE usr_key = ? ', [usr_key]);
        response.status = 200;
        return response.json(users);
    },

    async create (request, response) {
        const {usr_key, usr_passord, usr_grpusr_id, usr_status} = request.body;
        var strQuery = 'INSERT INTO users (usr_key, usr_passord, usr_grpusr_id, usr_status, usr_creation) ';
        strQuery += 'VALUES (?, ?, ?, ?, now()) ';
        await pool.query(strQuery, [usr_key, usr_passord, usr_grpusr_id, usr_status]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async delete (request, response) {
        const {usr_key} = request.params;
        const strQuery = 'DELETE FROM users WHERE usr_key = ? ';
        await pool.query(strQuery, [usr_key]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async update (request, response) {
        const {usr_key} = request.params;
        const {usr_passord, usr_grpusr_id, usr_status} = request.body;
        var strQuery = 'UPDATE users SET usr_passord = ?, usr_grpusr_id = ?, usr_status = ?  ';
        strQuery += ' WHERE usr_key = ? ';
        await pool.query(strQuery, [usr_passord, usr_grpusr_id, usr_status, usr_key]);
        response.status = 200;
        return response.json({"status": "OK"})
    }

}