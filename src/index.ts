
import {
    Client,
        GatewayIntentBits,
            Events
            } from "discord.js";

            import dotenv from "dotenv";

            import * as startCommand from "./commands/start.js";
            import * as profileCommand from "./commands/profile.js";

            dotenv.config();

            const token = process.env.DISCORD_TOKEN;

            if (!token) {
                throw new Error("DISCORD_TOKEN is missing from .env");
                }

                const client = new Client({
                    intents: [GatewayIntentBits.Guilds]
                    });

                    client.once(Events.ClientReady, (readyClient) => {
                        console.log(`Cricket Career is online as ${readyClient.user.tag}!`);
                        });

                        client.on(Events.InteractionCreate, async (interaction) => {
                            if (!interaction.isChatInputCommand()) return;

                                try {
                                        switch (interaction.commandName) {
                                                    case "start":
                                                                    await startCommand.execute(interaction);
                                                                                    break;

                                                                                                case "profile":
                                                                                                                await profileCommand.execute(interaction);
                                                                                                                                break;
                                                                                                                                        }
                                                                                                                                            } catch (error) {
                                                                                                                                                    console.error("Command error:", error);

                                                                                                                                                            const message = "Something went wrong!";

                                                                                                                                                                    if (interaction.deferred || interaction.replied) {
                                                                                                                                                                                await interaction.followUp({
                                                                                                                                                                                                content: message,
                                                                                                                                                                                                                ephemeral: true
                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                await interaction.reply({
                                                                                                                                                                                                                                                                content: message,
                                                                                                                                                                                                                                                                                ephemeral: true
                                                                                                                                                                                                                                                                                            });
                                                                                                                                                                                                                                                                                                    }
                                                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                                                        });

                                                                                                                                                                                                                                                                                                        client.login(token);
                                                                                                                                                                                                                                                                                                        