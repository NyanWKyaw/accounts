'use strict';
module.exports = function(app){
    var accountList = require('../controllers/accountListController')
    // accountList Route
    app.route('/accounts').get(accountList.getAllAccounts)

}