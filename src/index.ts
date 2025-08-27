import { setUser, readConfig } from "./config.js";
import { type commandRegistry , registerCommand, runCommand} from "./commands.js"
import { handlerLogin } from "./handlerLogin.js";
import { createUser } from "./lib/db/queries/users.js";
import { handlerRegister } from "./handlerRegister.js";

async function main() {
  console.log(process.argv)
  const commands: commandRegistry = {};
  await registerCommand(commands,"login", handlerLogin);
  await registerCommand(commands, "register", handlerRegister);
  const args = process.argv.slice(2);
  if (args.length > 0) {
      const [cmd, ...rest] = args;
      try {2
        await runCommand(commands, cmd, ...rest);
      } catch (error) {
        console.log(`Error occurred while executing command '${cmd}':`, error);
        process.exit(1);
      }
  } else {
    console.log("No command provided.");
    process.exit(1);
  }
  process.exit(0);
}

main();