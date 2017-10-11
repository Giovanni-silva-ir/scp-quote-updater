'use strict';

const express = require('express');
const router = express.Router();

const moduleConstructor = function(updaterService){
    router.get('/', function(req, res){
            res.send(updaterService.ListQuotes());
        });
    router.post('/:ativo', function(req, res){
        var result = updaterService.AddQuoteInfo(req.params.ativo);
        if(result !== undefined){
            res.statusCode = 201;
            res.send(result);
        }else{
            res.statusCode = 304;
            res.send('ativo já cadastrado');
        }
    });

    router.delete('/:ativo', function(req, res){
        var result = updaterService.RemoveQuoteInfo(req.params.ativo);
        if(result !== undefined){
            res.statusCode = 201;
            res.send(result);
        }else{
            res.statusCode = 404;
            res.send('ativo não encontrado');
        }
    });

    return router;
}

module.exports = function(updateService){
    let result = moduleConstructor(updateService);

    return {
        router: result
    }
};