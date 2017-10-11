'use strict';

let quotes = {};

const addQuoteInfo = function(quoteName){
    if(quotes[quoteName] === undefined){
        var newInfo = {
            symbol: quoteName,
            maximum:0 ,
            minimum: 0,
            open: 0,
            close:0
        };
        quotes[quoteName] = newInfo;
        console.log('quote', quoteName, 'was added to the list');
        console.log('----------------------------------------------');
        console.log(JSON.stringify(newInfo));
        console.log('----------------------------------------------');
        return newInfo;
    }

    return undefined;
}

const removeQuoteInfo = function(quoteName){
    if(quotes[quoteName] !== undefined){
        delete quotes[quoteName];
        console.log('quote', quoteName, 'was removed from the updating list.');
        return 'ok';
    }
    return undefined;
}

const listQuotes = function(){
    return quotes;
}

const start = function(interval){
    let fncInterval = interval || 200;
}

module.exports = {
    AddQuoteInfo: addQuoteInfo,
    RemoveQuoteInfo: removeQuoteInfo,
    ListQuotes: listQuotes,
    Start: start
}