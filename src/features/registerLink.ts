import { Client } from "discord.js";
import WOKCommands from "wokcommands";
import { AddLink } from "../services/user/AddLink";

export default (client: Client, instance: WOKCommands) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === "links") {
      if (!interaction.isModalSubmit()) return;

      const origin = interaction.fields.getTextInputValue("linkName");
      const url = interaction.fields.getTextInputValue("linkUrl");
      const { id } = interaction.user;
      const addLink = new AddLink();
      try {
        await addLink.execute({ id: Number(id), origin, url });
        interaction.reply({
          content: `Link adicionado com sucesso!`,
          ephemeral: true,
        });
      } catch (error) {
        interaction.reply({
          content: "Falha ao adicionar novo link!",
          ephemeral: true,
        });
      }
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
