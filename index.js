'use strict';

const express = require('express');
const router = express.Router();

const app = express();
const updaterService = require('./services/updaterService');

app.set('PORT', process.env.PORT || 3001);

const controllers = require('./controllers');
app.use(controllers(updaterService));

app.listen(app.get('PORT'), () => {
    console.log('Updater listening on port ', app.get('PORT'))
});
