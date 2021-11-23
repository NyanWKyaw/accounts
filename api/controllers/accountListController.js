'use strict';
var Account = require('../models/accountModel');

exports.getAllAccounts = function(req,res){
    var acccountList = [];
    acccountList.push(new Account(1,'John', "123456"));
    acccountList.push(new Account(2,'Steve', "678901"));
    res.send(acccountList);
}