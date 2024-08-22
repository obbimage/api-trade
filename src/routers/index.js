const tradeRouter = require('./tradeRouter');
const stockRouter = require('./stockRouter');

function routers(app) {
    app.use('/trade', tradeRouter);
    app.use('/stock', stockRouter);
}

module.exports = routers; 