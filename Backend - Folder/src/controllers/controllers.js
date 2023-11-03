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
        const result = await HBService.loginAdmin(req.body);
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
        const result = await HBService.allUser(req.user);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function deleteUser(req,res){
    try{
        const result = await HBService.deleteUser(req.body);
        res.json(result);
    }catch(err){
        res.json(err);
    }
}

async function updateUser(req,res){
    try{
        const result = await HBService.updateUser(req.body);
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
    updateUser,
    deleteUser
}