import { MongoClient } from 'mongodb';
let password = "fOfHBgvczOTnRJoC";
let name = "ddKamatera";
const uri = "mongodb+srv://<"+name+">:<"+password+">@db1.jijvj.mongodb.net/usersDb?retryWrites=true&w=majority";
console.log(uri);
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
});

