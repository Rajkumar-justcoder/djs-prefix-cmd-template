const { Client, Message, EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'serverinfo',
    description: 'Display info about server',
    aliases: ['si', 'server'],
    /**
     * @param {Message} message message 
     * @param {Client} client message
     * @param {[]} args args
     */
    async run(message, args, client) {
        try {
            const serverembed = new EmbedBuilder()

                .setAuthor({
                    name: `Server info for ${message.guild.name}`,
                    iconURL:
                        `${message.guild.iconURL({ dynamic: true, size: 512 })}`
                })
                .setColor('Random')
                .setThumbnail(message.guild.iconURL({ dynamic: true, size: 512 }))
                .addFields(
                    {
                        name: 'General',
                        value: `\n**Servername Name:** ${message.guild.name} \n**ID:** ${message.guild.id}`
                    },
                    {
                        name: 'Statistics',
                        value: `\n** Role Count:** ${message.guild.roles.cache.size}\n**Member Count:** ${message.guild.memberCount}`
                    }
                )
                .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.guild.iconURL({ dynamic: true }) })
                .setTimestamp();
            message.reply({ embeds: [serverembed] });
        } catch (error) {
            console.log(error);
        }
    }
};
