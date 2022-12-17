# DJS BOT TEMPLATE

A Discord bot template based on discordjs@latest.

### About
- 🏁 A Stater Discord bot template(handler) based on JavaScript.
- 🏠 Currently by default is Prefix comand Only ( default prefix [`<`]).

## Run locally 

1. Clone the repository and run the following to install the dependencies ( use any package manager you like in this using pnpm but it will not affect any thing ):
    ```bash
    npm install
    ```

2. Create `.env` file in the root directory and add the discord token created at **Discord Dev Portal** in this format:

    ```bash
    TOKEN=Your bot Token here
    PREFIX= guild id here
    MONGODBURL= mongo db url
    ```
  

> **NOTE**
>
> -  If no any private or mongodburl then leave it empty  in .env file 
> - Mongo db URL is optional. If you don't need it, then remove code as well as the `import` from `src/events/client/ready.js` file. Then uninstall the mongoose package.
 
>
> - If you want the code to be kept for a future mongo db connection then let it be there for later use and instead, remove the `imports` in that file and uninstall packages.


3. Start your bot:
    ```bash
    node .
    ```

## Premission check
- Coming soon.



## Screenshots

![A Console log of commands loaded](/Screenshorts/after_loading_cmd_event.png)

If any default errors found while registering commands, it will show here: 
![A Erros log if any any default error found ](/Screenshorts/pingerror.png)

Sample ping command:

![Sample ping command](/Screenshorts/ping.png)


## Dependencies
| Packages  | Version |
| ------------- |:-------------:|
| ascii-table |^0.0.9|
| discord.js | ^14.7.1|
| dotenv | ^16.0.3|
| glob | ^8.0.3|


## What is Discord.js?
- Discord.js is a powerful Node.js  module that allows you to interact with the Discord API  very easily. It takes a much more object-oriented approach than most other JS Discord libraries, making your bot's code significantly tidier and easier to comprehend.
- Usability, consistency, and performance are key focuses of discord.js, and it also has nearly 100% coverage of the Discord API. It receives new Discord features shortly after they arrive in the API.
- Discord.js definition credit : https://discord.js.org/#/

## Discord.js links for reference
- https://discord.js.org/#/
- https://discord.com/developers/docs/intro
- https://discordjs.guide/#before-you-begin
- https://www.npmjs.com/package/discord.js
- https://github.com/discordjs