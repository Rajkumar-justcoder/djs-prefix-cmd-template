## An template for adding commands 
```js
const { Client, Message } = require('discord.js');

module.exports = {
    name: 'cmd name',
    description: 'cmd description',
    aliases: [], // for aliases if any 
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