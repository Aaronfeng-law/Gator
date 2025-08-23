import { type CommandHandler } from "./commandHandler.js";

export type commandRegistry = {
    [key: string]: CommandHandler;
};

export function registerCommand(registry: commandRegistry, cmdName: string, handler: CommandHandler): void{
    registry[cmdName] = handler;
}

export function runCommand(registry: commandRegistry, cmdName: string, ...args: string[]): void{
    const handler = registry[cmdName];
    if (handler) {
        handler(cmdName, ...args);
    } else {
        throw new Error(`Unknown command: ${cmdName}`);
    }
}