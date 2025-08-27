import { type CommandHandler } from "./commands.js";
import { createUser, getUserByName } from "./lib/db/queries/users.js";
import { setUser } from "./config.js";

export const handlerRegister: CommandHandler = async (command: string, ...args: string[]): Promise<void> => {
    console.log("handlerRegister called with:", command, args);

    const username = args[0];
    if (username) {
        try {
            const existingUser = await getUserByName(username);
            if (existingUser) {
                console.log(`User '${username}' already exists. Set as current user.`);
                setUser(username);
                process.exit(0);
            } else {
                await createUser(username);
                setUser(username);
                console.log(`User '${username}' registered and set as current user.`);
            }
        } catch (error) {
            console.error(`Error occurred while handling user '${username}':`, error);
            if (error instanceof Error) {
                console.error(error.stack);
            }
        }
    } else {
        console.error("No username provided. Register failed.");
    }
};
