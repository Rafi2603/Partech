const res = require('express/lib/response');
const db = require('../configs/dbconfig');
const helper = require('../utils/helper');


async function loginUser(pp) {
    const { username, password } = pp;
    const query = `SELECT * FROM useraccount WHERE username = '${username}'`;
    const result = await db.query(query);
    if (result.rowCount > 0) {
        const user = result.rows[0];
        const comparePass = await helper.comparePassword(password, user.password);
        if (comparePass) {
          return { message: 'Login Success'};
        } else {
          return { message: 'Wrong Password' };
        }
    } else {
        return { message: 'Account not found' };
    }
}


async function loginAdmin(pp) {
    const { username, password } = pp;
    const query = `SELECT * FROM adminaccount WHERE username = '${username}'`;
    const result = await db.query(query);
    if (result.rowCount > 0) {
        const user = result.rows[0];
        //const comparePass = await helper.comparePassword(password, user.password);
        if (user.password == password) {
          return { message: 'Login Admin Success' };
        } else {
          return { message: 'Wrong Password' };
        }
    } else {
        return { message: 'Account Admin not found' };
    }
}


async function registerUser (pp){
    const { username, password, email, gender, phone, balance } = pp;
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


async function topup (pp){
    const { username, balance } = pp;
    const query = `UPDATE useraccount SET balance = balance + ${balance}  WHERE username = '${username}'`;
    console.log(query);
    const result = await db.query(query);
    if (result.rowCount > 0) {
        return{ message: 'TopUp Success' };
    } else {
        return { message: 'TopUp Failed' };
    }
}


module.exports = {
    loginUser,
    loginAdmin,
    registerUser,
    topup
}