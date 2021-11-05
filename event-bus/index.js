const express = require("express");
const axios = require("axios");

const app = express();
app.use(express.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;

  events.push(event);

  // WARNING!! Absolutely no error handling ahead!

  axios
    .post("http://posts-service:4000/events", event)
    .catch((error) => console.log(error.message));
  axios.post("http://comments-service:4001/events", event);
  axios.post("http://query-service:4002/events", event);
  axios.post("http://moderation-service:4003/events", event);

  console.log("Sent event:", event);
  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  console.log("Received event:", req.body.type);
  res.send(events);
});

app.listen(4005, () => {
  console.log("Listening on 4005...");
});
