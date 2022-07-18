import { ICommand } from "wokcommands";
import { modal } from "../components/LinksModal";
import { GetUser } from "../services/user/GetUser";

export default {
  description: "Registre seus links como Behance, GitHub etc.",
  category: "Curriculo",
  slash: "both",

  callback: async ({ message, interaction }) => {
    const getUser = new GetUser();
    const user = await getUser.execute({
      id: Number(interaction.user.id),
    });
    if (!user) {
      interaction.reply({
        content: "Registre primeiro em nosso banco de dados com /registro!",
        ephemeral: true,
      });
    } else {
      interaction.showModal(modal);
    }
  },
} as ICommand;
