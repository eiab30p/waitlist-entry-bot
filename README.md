# Discord NFT Bot Built in TypeScript Template

[![discord.js](https://img.shields.io/github/package-json/dependency-version/KevinNovak/Discord-Bot-TypeScript-Template/discord.js)](https://discord.js.org/)
[![Stars](https://img.shields.io/github/stars/eiab30p/waitlist-entry-bot.svg)](https://github.com//eiab30p/waitlist-entry-bot/stargazers)
[![Pull Requests](https://img.shields.io/badge/Pull%20Requests-Welcome!-brightgreen)](https://github.com//eiab30p/waitlist-entry-bot/pulls)


**Discord bot** - A discord bot template written with TypeScript.

## Introduction

This is bot is used to give a base for future discord bots that can be customized to what the project/server/team needs. This takes a lot of the heavy lifting away with boilerplate code to actual meaningful functionality. Review the [setup instructions](#setup) and review [boilerplate features](#features) already included.


## Features

### Built-In Bot Features

- Basic command structure.

## Commands

### Help Command


### Info Command

An `/info` command, which shows more information and relevant links.

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
4. Install packages.
    - Navigate into the downloaded source files and type `npm install`.

## Start Scripts

You can run the bot in multiple modes:

1. Normal Mode

2. Shard Mode

3. PM2 Mode
