import { Client } from "discord.js";
import WOKCommands from "wokcommands";

export default (client: Client, instance: WOKCommands) => {
  client.on("interactionCreate", (interaction) => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === "register") {
      interaction.reply({
        content: "Your submission was recieved successfully!",
      });
    }
  });
};

const config = {
  // The display name that server owners will see.
  // This can be changed at any time.
  displayName: "Register User",

  // The name the database will use to set if it is enabled or not.
  // This should NEVER be changed once set, and users cannot see it.
  dbName: "REGISTER USER",
};

export { config };
