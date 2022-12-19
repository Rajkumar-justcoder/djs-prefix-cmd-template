## An template for adding commands 
```js
const { Client, Message,PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'cmd name',
    description: 'cmd description',
    aliases: [], // for aliases if any 
    UserPerms: PermissionFlagsBits.KickMembers,
    //any permission u want to need to use this command
    //  add this UserPerms to that command where u need specific permission  to run cmd else remove it or comment it 
    /**
     * @param {Message} message message
     * @param {Client} client client
     * @param {[]} args args from msg
     */
    async run(message, args, client) {

        try {
            
            // your code for this commands;

        } catch (error) {
            console.log(error);
        }
    }
};
```
Create file inside /src/Commands/{any folder if needed}/cmd_name.js
add this template to file and modifiy it