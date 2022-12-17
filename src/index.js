const { Client, Collection, GatewayIntentBits, Partials } = require('discord.js');
const { Guilds, GuildMembers, MessageContent, GuildVoiceStates, GuildPresences, GuildMessageTyping, GuildMessages, GuildMessageReactions } = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember } = Partials;

require('dotenv/config');
const config = {
    TOKEN: process.env.TOKEN,
    PREFIX: process.env.PREFIX ? process.env.PREFIX : '<',
    MONGODBURL: process.env.MONGODBURL ? process.env.MONGODBURL : null,
};

const client = new Client({
    intents: [
        Guilds,
        GuildMembers,
        GuildVoiceStates,
        GuildPresences,
        GuildMessageTyping,
        GuildMessages,
        MessageContent,
        GuildMessageReactions
    ],
    partials: [
        User,
        Message,
        GuildMember,
        ThreadMember
    ]
});

client.config = config;

client.prefixcommands = new Collection();
client.events = new Collection();
client.cmdaliases = new Collection();

client
    .login(config.TOKEN)
    .then(() => {
        require('./Handlers/commandHandler')(client);
        require('./Handlers/eventHandler')(client);
    })
    .catch((err) => console.log(err));
