require('dotenv').config()
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents } = require('discord.js')
const { token } = process.env
const parseTime = require('../utils/parseTime')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
client.login(token)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reminder')
        .setDescription('Time')
        .addStringOption(option => option.setName('input').setDescription('[what to do] [XX:YY]')),
    async execute(interaction) {
        const reminderString = interaction.options.getString('input')

        if (!reminderString) return await interaction.reply("Input something please")

        const parsedCommand = reminderString.toLowerCase().split(' ')
        const command = parsedCommand[0]
        const time = parsedCommand[1]

        // console.log(interaction.channelId)
        // console.log(interaction.guildId)

        if (!command || !time) {
            return await interaction.reply("Please input both `what to do` and `when`")
        }

        setTimeout((async(interaction) => {
            const user = interaction.options.getUser('target');
            console.log(user)
            client.channels.cache.get(interaction.channelId).send(`YO @${user?.username}`)
        }).bind(null, interaction), parseTime(time))

        await interaction.reply("Ok")
    },
};