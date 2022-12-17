const { Client, EmbedBuilder, Message } = require('discord.js');

module.exports = {
    name: 'ping',
    description: 'Check ping of bot',
    aliases: [],
    /**
     * @param {Message} message message
     * @param {Client} client client
     * @param {[]} args args from msg
     */
    async run(message, args, client) {

        try {
            const pingLatency = Date.now() - message.createdTimestamp;
            const apiLatency = Math.round(`${client.ws.ping}`);
            const pingembed = new EmbedBuilder()
                .setColor('Random')
                .setAuthor({
                    name: `${message.guild.name}`,
                    iconURL:
                        `${message.guild.iconURL({ dynamic: true, size: 512 })}`
                })
                .setTitle(`Bot Ping`)
                .addFields(
                    { name: 'Ping Latency', value: `\`${pingLatency} ms\`` },
                    { name: 'API Latency', value: `\`${apiLatency} ms\`` }
                )
                .setFooter({ text: `${message.author.username}`, iconURL: `${message.guild.iconURL({ dynamic: true })}` })
                .setTimestamp();
            message.reply({ embeds: [pingembed] });

        } catch (error) {
            console.log(error);
        }
    }
};
