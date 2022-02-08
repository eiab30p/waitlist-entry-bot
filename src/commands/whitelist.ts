import { CommandContext } from '../models/command_context';
import { mainFun } from '../utils/whitelist';
import { Command } from './command';

export class WhitelistCommand implements Command {
    commandNames = ['whitelist'];

    getHelpMessage(commandPrefix: string): string {
        return `Try  ${commandPrefix}whitelist walletAddress`;
    }

    async run(parsedUserCommand: CommandContext): Promise<void> {
        if (parsedUserCommand.args.length === 0) {
            await parsedUserCommand.originalMessage.reply('Try !whitelist walletAddress');
        }
        let user = parsedUserCommand.author!.user!.username;
        let walletAddress = parsedUserCommand.args[0];

        console.log(user, walletAddress);
        mainFun(user, walletAddress);

        try {
            await parsedUserCommand.originalMessage.reply(`Wallet Added`);
        } catch (e) {
            console.log(e);
            await parsedUserCommand.originalMessage.reply('Try !whitelist walletaddress');
        }
    }

    hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
        return true;
    }
}
