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
          return { message: 'Login Success', user: user };
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
          return { message: 'Login Admin Success', user};
        } else {
          return { message: 'Wrong Password' };
        }
    } else {
        return { message: 'Account Admin not found' };
    }
}


async function registerUser (pp){
<<<<<<< HEAD
  const { username, password, email, gender, phone, balance, status } = pp;
  const pass = await helper.hashPassword(password);
  const query = `INSERT INTO userAccount (username, password, email, phone, balance, status) VALUES ('${username}', '${pass}', '${email}', '${phone}',0, false)`;
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
=======
    const { username, password, email, gender, phone, balance, status } = pp;
    const pass = await helper.hashPassword(password);
    const query = `INSERT INTO userAccount (username, password, email, gender, phone, balance, status) VALUES ('${username}', '${pass}', '${email}', '${gender}', '${phone}',0, false)`;
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
>>>>>>> f02f4b1ca2b476cbf98d10ba038b2931afa17727
}


async function allUser() {
    const query = 'SELECT * FROM useraccount';
    const result = await db.query(query);
  
    if (result.rowCount > 0) {
      return {
        message: 'Accounts found',
        accounts: result.rows,
      };
    } else {
      return {
        message: 'No Accounts found',
      };
    }
}

async function selectuser(pp) {
    const{userid} = pp
    const query = `SELECT * FROM useraccount WHERE userid='${userid}'`;
    const result = await db.query(query);
  
    if (result.rowCount > 0) {
      return {
        message: 'Accounts found',
        accounts: result.rows,
      };
    } else {
      return {
        message: 'No Accounts found',
      };
    }
}


async function topup(pp) {
  const { userid, balance } = pp;
  const query = `UPDATE useraccount SET balance = balance + ${balance}  WHERE userid = '${userid}'`;
  console.log(query);
  const result = await db.query(query);

  if (result.rowCount > 0) {
    const updatedBalanceQuery = `SELECT balance FROM useraccount WHERE userid = '${userid}'`;
    const updatedBalanceResult = await db.query(updatedBalanceQuery);
    const currentBalance = updatedBalanceResult.rows[0].balance;

    return { message: 'TopUp Success', currentBalance };
  } else {
    return { message: 'TopUp Failed' };
  }
}


async function parklock (pp){
  const { parkid, userid } = pp;
  const query = `INSERT INTO parklock (parkid, userid) VALUES (${parkid}, ${userid})`;
  const query2 = `UPDATE useraccount SET status = 'true' WHERE userid = '${userid}'`;
  console.log(query);
  const result = await db.query(query);
  if (result.rowCount > 0) {
    
    const result2 = await db.query(query2);
    if (result2.rowCount > 0){
      return{ message: 'Park lock Success' };
    } else {
      return { message: 'Account Status Update Failed' };
    }
      
  } else {
      return { message: 'Park lock Failed' };
  }
}

async function parkunlock (pp){
  const { parkid } = pp;
  const query = `UPDATE parklock SET endtime = timezone('Asia/Jakarta'::text, CURRENT_TIMESTAMP) WHERE parkid = '${parkid}'`;
  console.log(query);
  const result = await db.query(query);
  if (result.rowCount > 0) {
      return{ message: 'Park Unlock Success' };
  } else {
      return { message: 'Park Unlock Failed' };
  }
}




module.exports = {
    loginUser,
    loginAdmin,
    registerUser,
    allUser,
    selectuser,
    topup,
    parklock,
    parkunlock
}