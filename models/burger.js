var orm = require('../config/orm.js');


var burger = {
    //function to display all the burgers already in the database
    all: function (bdb) {
        orm.all("burgers", function (res) {
            bdb(res);
        });
    },

    //create burger
    create: function (col, val, bdb) {
        orm.create("burgers", col, val, function (res) {
            bdb(res);
        });
    },

    //update/devour
    update: function (colval, condition, bdb) {
        orm.update("burgers", colval, condition, function (res) {
            bdb(res);
        });
    }

};





module.exports = burger;