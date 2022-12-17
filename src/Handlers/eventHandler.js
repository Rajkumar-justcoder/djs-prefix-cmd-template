const { Client } = require("discord.js");
const Ascii = require('ascii-table');
const { loadfiles } = require("../Functions/loadfiles");
/**
 * @param {Client} client
 */

module.exports = async (client) => {

    const eventfiles = await loadfiles('Events');
    const Table = new Ascii('Events Loaded');
    Table.setHeading(`Event Name`, 'Status', 'Error');
    eventfiles.forEach((file) => {
        const event = require(file);

        if (!event?.name) return Table.addRow(`${file.match(/[\w\s\-]+\.\w+$/)}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a name.`);

        if (!event?.run) return Table.addRow(`${event.run}`, '🔶 FAILED', `${file.match(/[\w\s\-]+\.\w+$/)} Missing a run function`);

        const run = (...args) => event.run(...args, client);
        client.events.set(event.name, run);

        if (event.once) {
            client.once(event.name, run);
        } else {
            client.on(event.name, run);
        }
        Table.addRow(event.name, '🔷 Successfull');
    });

    console.log(Table.toString());
    console.log(`${eventfiles.length}  Events loaded `);
};