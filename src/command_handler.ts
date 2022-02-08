import { Message } from 'discord.js';
import { Command } from './commands/command';
import { MintCommand } from './commands/mintingInfo';
import { WhitelistCommand } from './commands/whitelist';
import { CommandContext } from './models/command_context';

/** Handler for bot commands issued by users. */
export class CommandHandler {
    private commands: Command[];

    private readonly prefix: string;

    constructor(prefix: string) {
        const commandClasses = [WhitelistCommand, MintCommand];

        this.commands = commandClasses.map(CommandClass => new CommandClass());
        this.prefix = prefix;
    }

    /** Executes user commands contained in a message if appropriate. */
    async handleMessage(message: Message): Promise<void> {
        if (message.author.bot || !this.isCommand(message)) {
            return;
        }

        const commandContext = new CommandContext(message, this.prefix);

        const allowedCommands = this.commands.filter(command =>
            command.hasPermissionToRun(commandContext)
        );
        const matchedCommand = this.commands.find(command =>
            command.commandNames.includes(commandContext.parsedCommandName)
        );

        if (!matchedCommand) {
            await message.reply('Oh No Wrong Command');
        } else if (!allowedCommands.includes(matchedCommand)) {
            await message.reply('Oh No Wrong Command');
        } else {
            await matchedCommand.run(commandContext);
        }
    }

    /** Determines whether or not a message is a user command. */
    private isCommand(message: Message): boolean {
        return message.content.startsWith(this.prefix);
    }
}
