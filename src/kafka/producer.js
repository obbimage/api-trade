require('dotenv').config();
const { Kafka } = require('kafkajs');
const TOPIC = require('./topic');


const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [process.env.KAFKA_BROKER],
});

const producer = kafka.producer();

async function producerMessage(message) {
    try {
        await producer.connect();
        await producer.send({
            topic: TOPIC.STOCK_DATA,
            messages: [{
                value: JSON.stringify(message)
            }],
        });
        console.log('producerMessage successfully')
    } catch (error) {
        console.error(`producerMessage error: ${error}`)
    } finally {
        await producer.disconnect();
    }

}


module.exports = producerMessage;
