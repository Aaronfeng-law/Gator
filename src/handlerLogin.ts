import {type CommandHandler} from "./commands.js";
import { setUser } from "./config.js";

export async function handlerLogin(cmdName: string, ...args: string[]): Promise<void> {
    if (args.length === 1) {
        setUser(args[0]);
        console.log(`User ${args[0]} has been set.`);
    } else if (args.length > 1) {
        throw new Error("Too many arguments provided, expected 1");
    } else{
        throw new Error("No username provided Login failed.");
    }
}