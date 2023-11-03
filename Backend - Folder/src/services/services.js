const res = require('express/lib/response');
const db = require('../configs/dbconfig');
const helper = require('../utils/helper');

async function loginUser(pp) {
    const { email, password } = pp;
    const query = `SELECT * FROM useraccount WHERE email = '${email}`;
    const result = await db.query(query);
    if (result.rowCount > 0) {
        const user = result.rows[0];
        const comparePass = await helper.comparePassword(password, user.password);
        if (comparePass) {
          return { message: 'Login Success', user };
        } else {
          return { message: 'Wrong Password' };
        }
    } else {
        return { message: 'Account not found' };
    }
}

async function loginAdmin(pp) {
    const { email, password } = pp;
    const query = `SELECT * FROM adminaccount WHERE email = '${email}`;
    const result = await db.query(query);
    if (result.rowCount > 0) {
        const user = result.rows[0];
        const comparePass = await helper.comparePassword(password, user.password);
        if (comparePass) {
          return { message: 'Login Success', user };
        } else {
          return { message: 'Wrong Password' };
        }
    } else {
        return { message: 'Account not found' };
    }
}

async function registerUser (mm){
    const { username, password, email, gender, phone, balance } = mm;
    const pass = await helper.hashPassword(password);
    const query = `INSERT INTO userAccount (username, password, email, gender, phone, balance) VALUES ('${username}', '${pass}', '${email}', '${gender}', '${phone}',0)`;
    const result = await db.query(query);
    if(result.rowCount === 1){
        console.log(query)
        return {
            message: 'Account Created'
        }
    }else{
        console.log(query)
        return{
            message: 'Entry All the Data Required'
        } 
    }
}



module.exports = {
    loginUser,
    loginAdmin,
    registerUser
}