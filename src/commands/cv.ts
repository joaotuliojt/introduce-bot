import { MessageActionRow } from "discord.js";
import { ICommand } from "wokcommands";
import { Button } from "../components/Button";
import { generateEmbedCv } from "../components/EmbedCv";
import { GetUser } from "../services/user/GetUser";

export default {
  description: "Mande seu perfil no canal",
  category: "Curriculo",
  slash: "both",
  callback: async ({ message, interaction }) => {
    try {
      const getUser = new GetUser();

      const userId = message ? message.author.id : interaction.user.id;

      const user = await getUser.execute({
        id: Number(userId),
      });
      if (!user) {
        interaction.reply({
          content: "Usuário não encontrado",
          ephemeral: true,
        });
        return;
      }
      const embedGenerated = generateEmbedCv({
        name: user.name,
        resume: user.resume,
      });

      const buttons = [
        Button({
          label: "GitHub",
          link: user?.github,
        }),
        Button({
          label: "Linkedin",
          link: user?.linkedin,
        }),
      ];
      const existButtons: any = buttons.filter(
        (button) => typeof button !== "undefined"
      );

      const row = new MessageActionRow().addComponents(existButtons);

      await interaction.reply({
        embeds: [embedGenerated],
        components: [row],
      });
    } catch (error) {
      console.log(error);
      interaction.reply("Registro não encontrado, tente o comando /registro");
    }
  },
} as ICommand;
