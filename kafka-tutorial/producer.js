import {Kafka} from "kafkajs"
const msg = process.argv[2].toLowerCase();
run();
async function run(){
    try {
        const kafka = new Kafka({
            "clientId" : "myapp",
            "brokers":  ["127.0.0.1:9092"]
        })

        const producer = kafka.producer();
        console.log("connecting")
        await producer.connect();
        console.log("connected")
        console.log(msg[0]);
        const partition = (msg[0] < "n") ? 0 : 1;
        console.log(partition);
        const result = await producer.send({
            "topic": "Users",
            "messages": [
                {
                    "value" : msg,
                    "partition" : partition
                }
            ]
        });
        console.log("sent msg"+ JSON.stringify(result));
        await producer.disconnect();
        console.log("disconnected");
    } catch (error) {
        console.log(err);
    }finally{
        process.exit(0);
    }
}