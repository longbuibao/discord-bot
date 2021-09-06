const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')

const axios = require('axios')
const apiUrl = 'https://restcountries.eu/rest/v2/alpha/'
module.exports = {
    data: new SlashCommandBuilder()
        .setName('country')
        .setDescription('Basic information about a country')
        .addStringOption(option => option.setName('input')
            .setDescription('Country Code')
            .setRequired(true)),
    async execute(interaction) {
        const countryCode = interaction.options.getString('input')

        try {
            const response = await axios.get(`${apiUrl}${countryCode}`)
            if (response.status === 200) {
                const mess = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`${response.data.nativeName} :flag_${countryCode}:`)
                    .addFields({ name: 'Alt Name', value: response.data.altSpellings.join(', ').toString() }, { name: 'Capital', value: `${response.data.capital}` }, { name: 'Population', value: `${new Intl.NumberFormat().format(response.data.population)}` }, { name: 'Area', value: `${new Intl.NumberFormat().format(response.data.area)}` }, { name: 'Languages', value: `${response.data.languages[0].nativeName}` })
                    .setTimestamp()
                return await interaction.reply({ embeds: [mess] })
            }
        } catch (error) {
            console.log(error)
            await interaction.reply(`:smiling_face_with_tear: I can't find that country, please input 2 letters country code`)
        }

    },
};