/* eslint-disable no-unused-vars */
import { MessageActionRow, Modal, TextInputComponent } from "discord.js";

const modal: any = new Modal().setCustomId("register").setTitle("Registro");

const linkedinInput: any = new TextInputComponent()
  .setCustomId("linkedin")
  .setLabel("Seu linkedin:")
  .setMaxLength(45)
  .setStyle("SHORT")
  .setRequired(true);

const nameInput: any = new TextInputComponent()
  .setCustomId("name")
  .setLabel("Seu nome:")
  .setMaxLength(30)
  .setStyle("SHORT")
  .setRequired(true);

const titleInput: any = new TextInputComponent()
  .setCustomId("title")
  .setLabel("Título de atuação")
  .setRequired(true)
  .setStyle("SHORT");

const resumeInput: any = new TextInputComponent()
  .setCustomId("resume")
  .setLabel("Digite um resumo sobre você:")
  .setStyle("PARAGRAPH")
  .setRequired(true);

const nameRow = new MessageActionRow().addComponents(nameInput);
const linkedinRow = new MessageActionRow().addComponents(linkedinInput);
const titleRow = new MessageActionRow().addComponents(titleInput);
const resumeRow = new MessageActionRow().addComponents(resumeInput);

modal.addComponents(nameRow, linkedinRow, titleRow, resumeRow);

export { modal };
