import { Client } from "discord.js";
import WOKCommands from "wokcommands";
import { CreateUser } from "../services/user/CreateUser";

export default (client: Client, instance: WOKCommands) => {
  client.on("interactionCreate", async (interaction) => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === "register") {
      if (!interaction.isModalSubmit()) return;

      const resume = interaction.fields.getTextInputValue("resume");
      const github = interaction.fields.getTextInputValue("github");
      const name = interaction.fields.getTextInputValue("name");
      const linkedin = interaction.fields.getTextInputValue("linkedin");
      const { id } = interaction.user;
      const createUser = new CreateUser();
      try {
        const user = await createUser.execute({
          resume,
          github,
          linkedin,
          name,
          id: Number(id),
        });

        interaction.reply({
          content: `Olá ${user.name}, seus dados foram registrados com sucesso!`,
        });
      } catch (error) {
        interaction.reply({
          content: "Você já tem um cadastro",
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
