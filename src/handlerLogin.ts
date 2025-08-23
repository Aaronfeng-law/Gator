import {type CommandHandler} from "./commandHandler.js";
import { setUser } from "./config.js";
export function handlerLogin(cmdName: string, ...args: string[]): void {
    if (args.length === 1) {
        setUser(args[0]);
        console.log(`User ${args[0]} has been set.`);
    } else if (args.length > 1) {
        throw new Error("Too many arguments provided, expected 1");
    } else{
        throw new Error("No username provided");
    }
}