const { stockModel } = require("../models/Stock")

class TradeRealController {

    // [GET]
   async getTradeReader(req, res) {
        res.json( await stockModel.find({}));
    };
}

module.exports = new TradeRealController;