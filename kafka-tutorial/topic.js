import {Kafka} from "kafkajs"

run();
async function run(){
    try {
        const kafka = new Kafka({
            "clientId" : "myapp",
            "brokers":  ["127.0.0.1:9092"]
        })

        const admin = kafka.admin();
        console.log("connecting")
        await admin.connect();
        console.log("connected")
        await admin.createTopics({
            "topics" : [{
                "topic": "Users",
                "numPartitions" : 2
            }]
        })
        await admin.disconnect();
        console.log("done creating partitions");
    } catch (error) {
        console.log(err);
    }finally{
        process.exit(0);
    }
}