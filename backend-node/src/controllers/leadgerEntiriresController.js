const pool = require('../database/database');


module.exports = {

    async index (request, response) {
        const accounts = await pool.query('SELECT * FROM ledger_entries',);
        response.status = 200;
        return response.json(accounts);
    },

    async record (request, response) {
        const {id} = request.params;
        const users = await pool.query('SELECT * FROM ledger_entries WHERE ledent_id = ? ', [id]);
        response.status = 200;
        return response.json(users);
    },

    async create (request, response) {
        const {ledent_chaacc_id, ledent_acc_id, ledent_description, ledent_value, ledent_grpusr_id, ledent_status} = request.body;
        var strQuery = 'INSERT INTO ledger_entries (ledent_chaacc_id, ledent_acc_id, ledent_description, ledent_value, ledent_grpusr_id, ledent_status, ledent_creation) ';
        strQuery += 'VALUES (?, ?, ?, ?, ?, ?, now() )';
        await pool.query(strQuery, [ledent_chaacc_id, ledent_acc_id, ledent_description, ledent_value, ledent_grpusr_id, ledent_status]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async delete (request, response) {
        const {id} = request.params;
        const strQuery = 'DELETE FROM ledger_entries WHERE ledent_id = ? ';
        await pool.query(strQuery, [id]);
        response.status = 200;
        return response.json({"status": "OK"})
    },

    async update (request, response) {
        const {id} = request.params;
        const {ledent_chaacc_id, ledent_acc_id, ledent_description, ledent_value, ledent_grpusr_id, ledent_status} = request.body;
        var strQuery = 'UPDATE ledger_entries SET ledent_chaacc_id = ?, ledent_acc_id = ?, ledent_description = ?, ledent_value = ?, ledent_grpusr_id = ?, ledent_status =? ';
        strQuery += ' WHERE ledent_id = ? ';
        await pool.query(strQuery, [ledent_chaacc_id, ledent_acc_id, ledent_description, ledent_value, ledent_grpusr_id, ledent_status, id]);
        response.status = 200;
        return response.json({"status": "OK"})
    }

}
