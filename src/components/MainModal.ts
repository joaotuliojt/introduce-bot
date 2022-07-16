/* eslint-disable no-unused-vars */
import { MessageActionRow, Modal, TextInputComponent } from "discord.js";

const modal: any = new Modal().setCustomId("register").setTitle("Registro");

const linkedinInput: any = new TextInputComponent()
  .setCustomId("linkedin")
  .setLabel("Seu linkedin:")
  .setMaxLength(45)
  .setStyle("SHORT");

const nameInput: any = new TextInputComponent()
  .setCustomId("name")
  .setLabel("Seu nome:")
  .setMaxLength(30)
  .setStyle("SHORT");

const githubInput: any = new TextInputComponent()
  .setCustomId("github")
  .setLabel("Seu github:")
  .setMaxLength(45)
  .setStyle("SHORT");

const resumeInput: any = new TextInputComponent()
  .setCustomId("resume")
  .setLabel("Digite um resumo sobre você:")
  .setStyle("PARAGRAPH");

const nameRow = new MessageActionRow().addComponents(nameInput);
const linkedinRow = new MessageActionRow().addComponents(linkedinInput);
const githubRow = new MessageActionRow().addComponents(githubInput);
const resumeRow = new MessageActionRow().addComponents(resumeInput);

modal.addComponents(nameRow, linkedinRow, githubRow, resumeRow);

export { modal };
