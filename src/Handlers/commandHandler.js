const Ascii = require("ascii-table");
const { Client } = require("discord.js");
const { loadfiles } = require("../Functions/loadfiles");

/**
 * @param {Client} client
 */
module.exports = async (client) => {

    // Events
    const commandsFiles = await loadfiles('Commands');
    const Table = new Ascii('/Commands Loaded');
    Table.setHeading(`Command Name`, 'Status', 'Error');

    const Prefixcommands = [];

    commandsFiles.forEach((file) => {
        const command = require(file);
        if (!command?.name) return Table.addRow(`${file.match(/[\w\s\-]+\.\w+$/)}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a name ( name must be lowercase )`);

        if (!command?.description) return Table.addRow(`${command.name}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Valid command desc is not provided`);

        if (!command?.run) return Table.addRow(`${command.name}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a run function`);

        client.prefixcommands.set(command.name, command);

        if (command.aliases?.length) {
            command.aliases.forEach((alias) => {
                client.cmdaliases.set(alias, command.name);
            });
        }

        Prefixcommands.push(command);

        Table.addRow(command.name, '🔷 Successfull');

    });

    console.log(Table.toString())
    console.log(`${Prefixcommands.length}  Commands loaded `);

};