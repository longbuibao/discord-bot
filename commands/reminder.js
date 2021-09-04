require('dotenv').config()
const { SlashCommandBuilder } = require('@discordjs/builders');
const { Client, Intents } = require('discord.js')
const { token } = process.env
const parseTime = require('../utils/parseTime')
const commandValidator = require('../utils/command-validator')

const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
client.login(token)

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reminder')
        .setDescription('remind you to do something...')
        .addStringOption(option => option.setName('input').setDescription('[what to do] [XX:YY]')),
    async execute(interaction) {
        const reminderString = interaction.options.getString('input')
        const parsedCommand = commandValidator(reminderString)

        if (!parsedCommand) return await interaction.reply("Please input both `what to do` and `when` [XX:YY] 24 hours format)")

        const { todo, time } = parsedCommand

        // console.log(interaction.channelId)
        // console.log(interaction.guildId)

        const jobId = setTimeout((async(interaction) => {
            client.channels.cache.get(interaction.channelId).send(`YO ${interaction.user} it's time for \`${todo}\``)
        }).bind(null, interaction), parseTime(time))

        await interaction.reply(`:blush: Ok, got it! :blush: Your job id is: \`${jobId}\``)
    },
};