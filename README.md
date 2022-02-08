# Discord NFT Bot Built in TypeScript Template

[![discord.js](https://img.shields.io/github/package-json/dependency-version/KevinNovak/Discord-Bot-TypeScript-Template/discord.js)](https://discord.js.org/)
[![Stars](https://img.shields.io/github/stars/eiab30p/waitlist-entry-bot.svg)](https://github.com//eiab30p/waitlist-entry-bot/stargazers)
[![Pull Requests](https://img.shields.io/badge/Pull%20Requests-Welcome!-brightgreen)](https://github.com//eiab30p/waitlist-entry-bot/pulls)


**Discord bot** - A discord bot template written with TypeScript.

## Introduction

This is bot is used to give a base for future discord bots that can be customized to what the project/server/team needs. This takes a lot of the heavy lifting away with boilerplate code to actual meaningful functionality. Review the [setup instructions](#setup) and review [boilerplate features](#features) already included.


<!-- For help using this template, feel free to [join our support server](https://discord.gg/Vyf6fEWbVr)!

[![Discord Shield](https://discord.com/api/guilds/660711235766976553/widget.png?style=shield)](https://discord.gg/Vyf6fEWbVr) -->

## Features

### Built-In Bot Features

- Basic command structure.
- Rate limits and command cooldowns.
- Welcome message when joining a server.
- Shows server count in bot status.
- Posts server count to popular bot list websites.
- Support for multiple languages.
- Supports [sharding](https://discordjs.guide/sharding/) which is required when your bot is in 2500+ servers.
- Supports [clustering](https://github.com/KevinNovak/Discord-Bot-TypeScript-Template-Master-Api) which allows you to run your bot on multiple machines.

## Commands

### Help Command

A `/help` command with a bot description, list of commands, and important links.

### Test Command

A generic command, `/test`, which can be copied to create additional commands.

### Info Command

An `/info` command, which shows more information and relevant links.

### Dev Command

A `/dev` command, which shows detailed information that may be helpful to developers.

### Link Command

A `/link` command, which provides relevant links (`invite`, `support`, `docs`, `vote`, `donate`).

### Welcome Message

A welcome message is sent to the server and owner when the bot is added.

## Setup

1. Copy example config files.
    - Navigate to the `config` folder of this project.
    - Copy all files ending in `.example.json` and remove the `.example` from the copied file names.
        - Ex: `config.example.json` should be copied and renamed as `config.json`.
2. Obtain a bot token.
    - You'll need to create a new bot in your [Discord Developer Portal](https://discord.com/developers/applications/).
        - See [here](https://www.writebots.com/discord-bot-token/) for detailed instructions.
        - At the end you should have a **bot token**.
3. Modify the config file.
    - Open the `config/config.json` file.
    - You'll need to edit the following values:
        - `client.id` - Your discord bot's [user ID](https://techswift.org/2020/04/22/how-to-find-your-user-id-on-discord/).
        - `client.token` - Your discord bot's token.
4. Install packages.
    - Navigate into the downloaded source files and type `npm install`.
5. Register commands.
    - In order to use slash commands, they first [have to be registered](https://discordjs.guide/interactions/registering-slash-commands.html#registering-slash-commands).
    - Type `npm run register` to register the bot's commands.
        - Run this script any time you change a command name, structure, or add/remove commands.
        - This is so Discord knows what your commands look like.
        - It may take up to an hour for command changes to appear.

## Start Scripts

You can run the bot in multiple modes:

1. Normal Mode
    - Type `npm start`.
    - This runs the bot directly with Node and without shards.
    - Use this mode if you don't need sharding.
2. Shard Mode
    - Type `npm run start:shard`.
    - This runs the bot directly with Node and with sharding enabled.
    - Use this mode if you need sharding.
3. PM2 Mode
    - Run by typing `npm run start:pm2`.
    - This runs the bot using the process manager [PM2](https://pm2.keymetrics.io/).
    - Use this mode if you require the bot to always be online.
