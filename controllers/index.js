'use strict'; 

const express = require('express');
const router = express.Router();


module.exports = function(updaterService){
    const controller = require('./updaterController');
    router.use('/quotes', controller(updaterService).router);
    return router;
};
