import express from "express";
import { createClient } from "redis";

const client = createClient();
client.connect();
const app = express();

app.use(express.json());

app.post("/submit ", function (req: any, res: any) {
  const { problem, userId, code, language } = req.body;
});

// const PORT = 3000;

// app.listen(PORT, function (req: any, resa: any) {
//   console.log(`server listening on port ${PORT}`);
// });
