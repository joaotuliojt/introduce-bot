import { ICommand } from "wokcommands";

export default {
  category: "Test",
  description: "Replies with pong",

  slash: "both",
  testOnly: true,

  callback: ({ message, interaction }) => {
    const reply = "Hi!";

    if (message) {
      message.reply({
        content: reply,
      });
      return;
    }

    interaction.reply({
      content: reply,
    });
  },
} as ICommand;
