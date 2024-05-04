import { createClient } from "redis";

const client = createClient();
async function Main() {
  await client.connect();

  while (1) {
    const response = await client.brPop("submissions", 0);
    console.log(response);
    await new Promise((resolve) => setTimeout(resolve, 100));

    console.log("processed  ");
  }
}

Main();
