import { REST, Routes } from "discord.js";
import dotenv from "dotenv";

import { data as startCommand } from "./commands/start.js";
import { data as profileCommand } from "./commands/profile.js";

dotenv.config();

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;

if (!token || !clientId || !guildId) {
    throw new Error("Missing credentials in .env");
    }

    const rest = new REST({ version: "10" }).setToken(token);

    async function registerCommands() {
        try {
                console.log("Registering commands...");

                        await rest.put(
                                    Routes.applicationGuildCommands(clientId, guildId),
                                                {
                                                                body: [
                                                                                    startCommand.toJSON(),
                                                                                                        profileCommand.toJSON()
                                                                                                                        ]
                                                                                                                                    }
                                                                                                                                            );

                                                                                                                                                    console.log("Commands registered successfully!");
                                                                                                                                                        } catch (error) {
                                                                                                                                                                console.error("Registration failed:", error);
                                                                                                                                                                    }
                                                                                                                                                                    }

                                                                                                                                                                    registerCommands();