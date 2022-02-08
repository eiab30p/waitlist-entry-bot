import { MessageEmbed } from 'discord.js';
import { CommandContext } from '../models/command_context';
import { Command } from './command';

export class MintCommand implements Command {
    commandNames = ['wenmint'];

    private commands: Command[];

    getHelpMessage(commandPrefix: string): string {
        return `Try !wenmint`;
    }

    async run(parsedUserCommand: CommandContext): Promise<void> {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Mint Info')
            .setDescription('SolScratch')
            .addFields(
                { name: 'Wen Mint', value: 'Below is the info regarding minitng' },
                { name: 'Price', value: '1 Sol', inline: true },
                { name: 'Whitelist Price', value: ' .08 Sol', inline: true },
                { name: 'Date', value: 'April 16th 2022', inline: true },
            )
            .setTimestamp();

        try {
            await parsedUserCommand.originalMessage.reply(embed);
        } catch (e) {
            console.log(e);
            await parsedUserCommand.originalMessage.reply('Try !whitelist walletaddress');
        }
    }

    hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
        return true;
    }
}
