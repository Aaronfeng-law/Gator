import fs from "fs";
import os from "os";
import path from "path";


export type Config = {
    dbUrl: string,
    currentUserName: string
}
//Export a setUser function that writes a Config object to the JSON file after setting the currentUserName field.
export function setUser(userName: string): Config {
    const cfg = readConfig();
    cfg.dbUrl = cfg.dbUrl;
    cfg.currentUserName = userName;
    writeConfig(cfg);
    return cfg;
}

export function readConfig(): Config {
    const ConfigFilePath = getConfigFilePath();
    const rawConfig = JSON.parse(fs.readFileSync(ConfigFilePath, 'utf-8'));
    return validateConfig(rawConfig);
}

function getConfigFilePath(): string {
    return path.join(os.homedir(), 'Publics/project/bootdev/Gator/.gatorconfig.json');
}

function writeConfig(cfg: Config): void {
    fs.writeFileSync(getConfigFilePath(), JSON.stringify(cfg, null, 2), 'utf-8');
}

function validateConfig(rawConfig: any): Config {
    const config: Config = {
        dbUrl: rawConfig.dbUrl,
        currentUserName: rawConfig.currentUserName
    };
    return config;
}

