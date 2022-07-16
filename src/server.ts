import { Client, Intents } from "discord.js";
import WOKCommands from "wokcommands";
import path from "path";
import { config } from "./config";
import { mongoConnection } from "./database/mongo";

async function initServer() {
  try {
    await mongoConnection();
    console.log("Connected to db!");
  } catch (error) {
    console.log(error);
  }

  const client = new Client({
    intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ],
  });

  client.on("ready", () => {
    new WOKCommands(client, {
      commandsDir: path.join(__dirname, "commands"),
      featuresDir: path.join(__dirname, "features"),
      typeScript: true,
      ignoreBots: true,
      defaultLanguage: "portuguese",
      botOwners: ["426120432991862784"],
      testServers: ["951489300728533102"],
      mongoUri: config.MONGO_URI,
    }).setDefaultPrefix("?");
  });

  client.login(config.BOT_TOKEN);
}

initServer();
