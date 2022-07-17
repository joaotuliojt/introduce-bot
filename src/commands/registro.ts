import { ICommand } from "wokcommands";
import { modal } from "../components/MainModal";
import { GetUser } from "../services/user/GetUser";

export default {
  description:
    "Registre seu currículo em nosso banco de dados e use em qualquer servidor no qual fui adicionado!",
  category: "Curriculo",
  slash: "both",

  callback: async ({ message, interaction }) => {
    const getUser = new GetUser();
    const user = await getUser.execute({ id: Number(interaction.user.id) });
    if (!user) {
      interaction.showModal(modal);
    } else {
      interaction.reply({
        content: "Perfil Discord já registrado em nosso banco de dados!",
        ephemeral: true,
      });
    }
  },
} as ICommand;
