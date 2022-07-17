import { MessageButton } from "discord.js";

interface ButtonData {
  link?: string;
  label: string;
}

export function Button({ label, link }: ButtonData) {
  if (!link) return undefined;

  const button = new MessageButton()
    .setLabel(label)
    .setURL(link)
    .setStyle("LINK");

  return button;
}
