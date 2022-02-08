import { CommandContext } from '../models/command_context';
import { mainFun } from '../utils/whitelist';
import { Command } from './command';

export class WhitelistCommand implements Command {
    commandNames = ['whitelist'];

    getHelpMessage(commandPrefix: string): string {
        return `Try ${commandPrefix}whitelist walletAddress`;
    }

    async run(parsedUserCommand: CommandContext): Promise<void> {
        if (parsedUserCommand.args.length === 0) {
            await parsedUserCommand.originalMessage.reply('Try Again');
        }
        let user = parsedUserCommand.author!.user!.username;
        let walletAddress = parsedUserCommand.args[0];

        const work = await mainFun(user, walletAddress);

        try {
            if (work) {
                await parsedUserCommand.originalMessage.reply(`Wallet Added!`);
            } else {
                await parsedUserCommand.originalMessage.reply(
                    `\nAlready Added. \nIf this is wrong contact the dev team`
                );
            }
        } catch (e) {
            console.log(e);
            await parsedUserCommand.originalMessage.reply('Try Again');
        }
    }

    hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
        return true;
    }
}
