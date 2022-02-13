import { MessageEmbed } from 'discord.js';
import { CommandContext } from '../models/command_context';
import { Command } from './command';

export class LeaderBoardCommand implements Command {
    commandNames = ['leaderboard'];

    private commands: Command[];

    getHelpMessage(commandPrefix: string): string {
        return `Try !leaderboard`;
    }

    async run(parsedUserCommand: CommandContext): Promise<void> {
        const embed = new MessageEmbed()
            .setColor('#0099ff')
            .setTitle('Leader Board Info')
            .setDescription('Game Night Leader Board')
            .addFields(
                {
                    name: '1st:',
                    value: '@anniepoo with 11 points',
                    inline: false,
                },
                { name: '2nd:', value: '@DJ Kimco with 6 points', inline: false },
                { name: '3rd:', value: '@sa_roger with 5 points', inline: false },
                { name: '4th:', value: '@sock with 3 points', inline: false }
            )
            .setTimestamp();

        try {
            await parsedUserCommand.originalMessage.reply(embed);
        } catch (e) {
            // console.log(e);
            await parsedUserCommand.originalMessage.reply('Try !whitelist walletaddress');
        }
    }

    hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
        return true;
    }
}
