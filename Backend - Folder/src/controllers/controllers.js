const PTService = require('../services/services');


async function loginUser(req,res){
    try{
        const result = await PTService.loginUser(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}


async function loginAdmin(req,res){
    try{
        const result = await PTService.loginAdmin(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}


async function registerUser(req,res){
    try{
        const result = await PTService.registerUser(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}


async function allUser(req,res){
    try{
        const result = await PTService.allUser(req.user);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function selectuser(req,res){
    try{
        const result = await PTService.selectuser(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}


async function updateUser(req,res){
    try{
        const result = await PTService.updateUser(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}


async function topup(req,res){
    try{
        const result = await PTService.topup(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function parklock(req,res){
    try{
        const result = await PTService.parklock(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

async function parkunlock(req,res){
    try{
        const result = await PTService.parkunlock(req.body);
        res.json(result);
    }catch(err){
        res.json(err.detail);
    }
}

module.exports = {
    loginUser,
    loginAdmin,
    registerUser,
    allUser,
    selectuser,
    updateUser,
    topup,
    parklock,
    parkunlock
}