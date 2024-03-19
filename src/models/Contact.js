const db = require('../db');

const Contact = {
    findAll: async () => {
        const { rows } = await db.query('SELECT * FROM contacts');
        return rows;
    },

    create: async ({name, email, address}) => {
        const { rows } = await db.query(
            'INSERT INTO contacts (name, email, address) VALUES ($1, $2, $3) RETURNING *',
            [name, email, address]
        );
        return rows[0];
    },
}

module.exports = Contact;
