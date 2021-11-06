import {Kafka} from "kafkajs"
run();
async function run(){
    try {
        const kafka = new Kafka({
            "clientId" : "myapp",
            "brokers":  ["127.0.0.1:9092"]
        })

        const consumer = kafka.consumer({"groupId": "test"});
        console.log("connecting")
        await consumer.connect();
        console.log("connected")
        await consumer.subscribe({
            "topic" : "Users",
            "fromBeginning" : true
        })
        console.log("subscribed")
        await consumer.run({
            "eachMessage": async result=>{
                console.log(`RVD Message ${result.message.value} on partition ${result.partition}`)
            }
        })
    } catch (error) {
        console.log(error);
    }finally{
    }
}