import { Client, Intents } from 'discord.js';
import dotenv from 'dotenv';
import fs from 'fs'; 
dotenv.config();
 
const Prefix = '!';


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});


client.on('ready', () => {
    console.log("ready to meme");
})

client.on('messageCreate', (message) => {

    if (!message.content.startsWith("!")) return;

    const args = message.content.substring("!".length).split(/ +/);

    switch (args[0]) {
        case "hello":
            message.reply("hey");

            break;

            case "say":
                message.reply(args.slice(1).join(""));

                break;
    }
});

client.login(process.env.TOKEN);