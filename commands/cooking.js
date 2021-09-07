const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const parseArgs = require('../utils/parseArgs')
const apiUrl = 'https://api.spoonacular.com'

module.exports = {
    data: new SlashCommandBuilder()
        .setName('cooking')
        .setDescription('Get your hand dirty')
        .addStringOption(option => option.setName('ingredients')
            .setDescription('link')
        ),
    async execute(interaction) {
        const agrs = interaction.options.getString('ingredients')
        const client = interaction.client
        if (!agrs) {
            await client.channels.cache.get(interaction.channelId).send(`:face_with_monocle: Looking for random recipes...`)
                // const response = await axios.get()
        }
    },
};