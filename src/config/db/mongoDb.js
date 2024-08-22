require('dotenv').config();
const mongoose = require('mongoose');


async function connect(uri) {
    try {
        await mongoose.connect(uri);
        console.log(`connect mongodb successfully`);
    } catch (error) {
        console.log(`connect db failed: ${error}`);
    }
}

module.exports = { connect };