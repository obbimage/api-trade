require('dotenv').config();
const { Kafka } = require('kafkajs');
const TOPIC = require('./topic');

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: [process.env.KAFKA_BROKER],
});

const consumer = kafka.consumer({ groupId: 'test-group' });

async function runConsumer() {
    await consumer.connect();
    await consumer.subscribe({
        topic: TOPIC.STOCK_DATA,
        fromBeginning: true
    });

    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log({
                value: message.value.toString(),
            })
        },
    })
}

module.exports = runConsumer;