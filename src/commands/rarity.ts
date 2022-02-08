// import { CommandContext } from "../models/command_context";
// import { mainFun } from "../utils/rarity";
// import { Command } from "./command";

// export class RarityCommand implements Command {
//   commandNames = ["rarity"];

//   private commands: Command[];

//   // constructor(commands: Command[]) {
//   //   this.commands = commands;
//   // }

//   getHelpMessage(commandPrefix: string): string {
//     return `Try !rarity 409`;
//   }

//   async run(parsedUserCommand: CommandContext): Promise<void> {
//     if (parsedUserCommand.args.length === 0) {
//       await parsedUserCommand.originalMessage.reply("Try !rarity 409");
//     }

//     let main_sort_by = "rarity_score";
//     let main_order = "desc";
//     let main_traits =
//       "Space Suit Gear,Gear,CluckSaber,Background,Expression,Shades,Cap,Kicks,Space Suit";
//     let main_attr_count = "9";
//     let main_query;

//     let test: any = mainFun(
//       `Winston #${parsedUserCommand.args[0]}`,
//       main_sort_by,
//       main_order,
//       main_traits.split(",").filter((val) => val),
//       main_attr_count,
//       main_query
//     );

//     try {
//       let rankType = "Common";
//       let rarityRank = Math.round(test.nfts.rarity_score);
//       if (rarityRank < 2) {
//         rankType = "Mystic";
//       } else if (rarityRank < 5) {
//         rankType = "Legendary";
//       } else if (rarityRank < 15) {
//         rankType = "Epic";
//       } else if (rarityRank < 30) {
//         rankType = "Rare";
//       } else if (rarityRank < 40) {
//         rankType = "Uncommon";
//       }

//       let arrtBack =
//           test.nfts.attributes.find((x) => x.trait_type === "Background")
//             ?.value ?? "None",
//         arrtExpress =
//           test.nfts.attributes.find((x) => x.trait_type === "Expression")
//             ?.value ?? "None",
//         arrtSuit =
//           test.nfts.attributes.find((x) => x.trait_type === "Space Suit")
//             ?.value ?? "None",
//         arrtKicks =
//           test.nfts.attributes.find((x) => x.trait_type === "Kicks")?.value ??
//           "None",
//         arrtCap =
//           test.nfts.attributes.find((x) => x.trait_type === "Cap")?.value ??
//           "None",
//         arrtGear =
//           test.nfts.attributes.find((x) => x.trait_type === "Space Suit Gear")
//             ?.value ?? "None",
//         arrtSaber =
//           test.nfts.attributes.find((x) => x.trait_type === "CluckSaber")
//             ?.value ?? "None";

//       await parsedUserCommand.originalMessage.reply(
//         `
//       Name: ${test.nfts.name}
//       Rarity Sore: ${Math.round(test.nfts.rarity_score)} - ${rankType}
//       Rarity Rank: ${Math.round(test.nfts.rarity_rank)}
//       Attributes:
//          - Background: ${arrtBack}
//          - Expression: ${arrtExpress}
//          - Space Suit: ${arrtSuit}
//          - Kicks: ${arrtKicks}
//          - Cap: ${arrtCap}
//          - Space Suit Gear: ${arrtGear}
//          - CluckSaber: ${arrtSaber}
//       `,
//         { files: [test.nfts.image] }
//       );
//     } catch (e) {
//       console.log(e);
//       await parsedUserCommand.originalMessage.reply("Try !rarity 409");
//     }
//   }

//   hasPermissionToRun(parsedUserCommand: CommandContext): boolean {
//     return true;
//   }
// }
