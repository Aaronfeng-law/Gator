export type CommandHandler = (
    cmdName: string,
    ...args: string[]
) => Promise<void>;


export type commandRegistry = {
    [key: string]: CommandHandler;
};

export async function registerCommand(registry: commandRegistry, cmdName: string, handler: CommandHandler): Promise<void>{
    registry[cmdName] = handler;
}

export async function runCommand(registry: commandRegistry, cmdName: string, ...args: string[]): Promise<void>{
    const handler = registry[cmdName];
    if (handler) {
        await handler(cmdName, ...args); // ← 這裡加上 await
    } else {
        throw new Error(`Unknown command: ${cmdName}`);
    }
}