const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config()

client.login(process.env.token).then(() => {
    console.log("I am ready");
    const guild = client.guilds.get()
});