const producerMessage = require('../kafka/producer');
const { stockModel } = require('../models/Stock');

class StockController {

    //[POST] :stock/insert
    async insert(req, res) {
        try {
            let stock = {
                close: req.body.close,
                date: req.body.date,
                hight: req.body.hight,
                low: req.body.low,
                open: req.body.open,
                ticker: req.body.ticker,
                vol: req.body.vol
            };
            await stockModel.create(stock);
            res.status(200).json({
                message: 'insert successfully'
            })
        } catch (error) {
            console.error(error);
            res.status(500).json({
                message: 'server error'
            })
        };
    };

    //[POST] :stock/send
    // gửi dữ liệu chứng khoáng vào kafka
    async send(req, res) {
        try {
            const message = req.body;
            // console.log(message)
            await producerMessage(message);
            res.status(200).json({
                message: 'stock data send to kafka successfully'
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'error sending to kafka'
            })
        }
    }
};

module.exports = new StockController;