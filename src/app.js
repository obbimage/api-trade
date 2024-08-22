const express = require('express');
const routers = require('./routers');

function App(app) {
    /**  middleware */
    app.use(express.json());

    /**  router*/
    routers(app);
    app.get('/', (res, req) => {
        req.send('hello');
    });

}

module.exports = { App }