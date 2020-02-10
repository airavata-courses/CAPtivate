const express = require('express')
const app = express()
const kafka = require("kafka-node")

Consumer = kafka.Consumer,
client = new kafka.KafkaClient()
consumer = new Consumer(client, [{ topic: "session-management"}])

consumer.on("message", function(message) {
  console.log(message);
});
 
app.get('/', function (req, res) {
  res.send('Hello from session management')
})
 
app.listen(3005)
