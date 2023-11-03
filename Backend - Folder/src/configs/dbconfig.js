
const { Client } = require('pg');

const db = new Client({
    user: 'rafiwirasena03',
    host: 'ep-dry-voice-30855502.ap-southeast-1.aws.neon.tech',
    database: 'partech',
    password: 'MAQX4clGe9bv',
    port: 5432,
    sslmode: 'require',
    ssl: true
});


db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database ParTech');
    }
});

module.exports = db;