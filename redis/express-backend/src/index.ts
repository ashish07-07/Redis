import express from "express";
import { createClient } from "redis";

const app = express();

app.use(express.json());

const client = createClient();

client.connect();

console.log("hi connected");
console.log(client);
app.post("/submit", function (req, res) {
  console.log("hi");
  const { problemId, userId, code, language } = req.body;
  client.lPush(
    "submissions",
    JSON.stringify({ problemId, userId, code, language })
  );

  res.json({
    message: "successfull added",
  });
});

app.listen(3000);
