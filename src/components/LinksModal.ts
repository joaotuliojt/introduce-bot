import { MessageActionRow, Modal, TextInputComponent } from "discord.js";

const modal: any = new Modal().setCustomId("links").setTitle("Registrar link");

const linknameInput: any = new TextInputComponent()
  .setCustomId("linkName")
  .setLabel("Nome do site")
  .setStyle("SHORT")
  .setRequired(true);

const linkInput: any = new TextInputComponent()
  .setCustomId("linkUrl")
  .setLabel("Url do site")
  .setStyle("SHORT")
  .setRequired(true);

const linknameRow = new MessageActionRow().addComponents(linknameInput);
const linkRow = new MessageActionRow().addComponents(linkInput);

modal.addComponents(linknameRow, linkRow);

export { modal };
