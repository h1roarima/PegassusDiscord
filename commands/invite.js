const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "invite",
  description: "Para invitarme a tu servidor",
  usage: "",
  permissions: {
    channel: ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"],
    member: [],
  },
  aliases: ["inv"],
  /**
   *
   * @param {import("../structures/DiscordMusicBot")} client
   * @param {import("discord.js").Message} message
   * @param {string[]} args
   * @param {*} param3
   */
  run: async (client, message, args, { GuildDB }) => {
    let embed = new MessageEmbed()
      .setAuthor(
        "Invita " + client.user.tag + " a tu servidor!",
        client.user.displayAvatarURL()
      )
      .setColor("BLUE")
      .setDescription(
        `Puedes invitarme haciendo click [aquí](https://discord.com/oauth2/authorize?client_id=${
          client.botconfig.ClientID
        }&permissions=${
          client.botconfig.Permissions
        }&scope=bot%20${client.botconfig.Scopes.join("%20")}&redirect_url=${
          client.botconfig.Website
        }${client.botconfig.CallbackURL}&response_type=code)`
      );
    message.channel.send(embed);
  },
  SlashCommand: {
    /**
     *
     * @param {import("../structures/DiscordMusicBot")} client
     * @param {import("discord.js").Message} message
     * @param {string[]} args
     * @param {*} param3
     */
    run: async (client, interaction, args, { GuildDB }) => {
      let embed = new MessageEmbed()
        .setAuthor(
          "Invita " + client.user.tag + " a tu servidor!",
          client.user.displayAvatarURL()
        )
        .setColor("BLUE")
        .setDescription(
          `Puedes invitarme haciendo click [aquí](https://discord.com/oauth2/authorize?client_id=${
            client.botconfig.ClientID
          }&permissions=${
            client.botconfig.Permissions
          }&scope=bot%20${client.botconfig.Scopes.join("%20")}&redirect_url=${
            client.botconfig.Website
          }${client.botconfig.CallbackURL}&response_type=code)`
        );
      interaction.send(embed);
    },
  },
};
