import { ICommand } from "wokcommands";
import { modal } from "../components/MainModal";

export default {
  description:
    "Registre seu currículo em nosso banco de dados e use em qualquer servidor no qual fui adicionado!",
  category: "Curriculo",
  slash: "both",

  callback: ({ message, interaction }) => {
    if (message) {
      interaction.showModal(modal);
      return;
    }
    interaction.showModal(modal);
  },
} as ICommand;
