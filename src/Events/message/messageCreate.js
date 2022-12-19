const { Client, Message } = require('discord.js');

module.exports = {
    name: 'messageCreate',
    /**
     *
     * @param { Message } message intraction create imp
     * @param { Client } client client use
     */
    async run(message, client) {

        if (!message.guild || message.author.bot) return;

        const prefix = client.config.PREFIX;


        if (!message.content.startsWith(prefix)) return;

        const [cmd, ...args] = message.content.slice(prefix.length).trim().split(/ +/g);

        const command = client.prefixcommands.get(cmd) || client.prefixcommands.get(client.cmdaliases.get(cmd));

        if (command) {

            if (message.guild) {
                const userPermCheck = command.UserPerms;
                if (userPermCheck) {
                    console.log(message.channel.permissionsFor(message.member));
                    const missing = message.member.permissions.missing(userPermCheck);
                    console.log(missing);

                    if (missing.length) {
                        return message.reply(`You are missing \`${missing.join(',')}\`  permissions, you need them to use this command!`);
                    }
                }
            }

            command.run(message, args, client);
        }

    }
};
