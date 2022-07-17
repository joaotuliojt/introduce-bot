import { MessageEmbed } from "discord.js";

interface GenerateEmbedCvData {
  name: string;
  resume: string;
}

export function generateEmbedCv({ name, resume }: GenerateEmbedCvData) {
  const embed = new MessageEmbed()
    .setColor("#42B983")
    .setTitle(`CV - ${name}`)
    .addField("Nome", name, true)
    .addField("Resumo", resume);

  return embed;
}
