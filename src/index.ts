import { setUser, readConfig } from "./config.js";
import { type commandRegistry , registerCommand, runCommand} from "./commands.js"
import { handlerLogin } from "./handlerLogin.js";


function main() {
  const commands: commandRegistry = {};
  registerCommand(commands,"login", handlerLogin);
  const args = process.argv.slice(2);
  if (args.length > 0) {
      const [cmd, ...rest] = args;
      try {
        runCommand(commands, cmd, ...rest);
      } catch (error) {
        console.log(`Error occurred while executing command '${cmd}':`, error);
        process.exit(1);
      }
  } else {
    console.log("No command provided.");
    process.exit(1);
  }
}

main();