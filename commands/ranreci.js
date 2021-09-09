const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed } = require('discord.js')
const axios = require('axios')
const parseArgs = require('../utils/parseArgs')
const apiUrl = 'https://api.spoonacular.com'

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ranreci')
        .setDescription('Get your hand dirty with random recipes')
        .addStringOption(option => option.setName('tags')
            .setDescription('Food tags to get randomly')
            .setRequired(true)
        ),
    async execute(interaction) {
        const tags = parseArgs(interaction.options.getString('tags'))
        try {
            const uriRandom = apiUrl + `/recipes/random?apiKey=${process.env.spoonacularApi}&limitLicense=false&number=1&tags=${tags}`
            const response = await axios.get(uriRandom)
            if (response.data.recipes.length === 0) return await interaction.reply(`:smiling_face_with_tear: I can't find that tags, please check again`)

            const mess = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${response.data.recipes[0].title}`)
                .setURL(`${response.data.recipes[0].spoonacularSourceUrl}`)
                .setThumbnail(`${response.data.recipes[0].image}`)
                .addFields({ name: 'Vegetarian?', value: `${response.data.recipes[0].vegetarian ? 'Yerp': 'Norp'}` }, { name: 'Ingredients', value: response.data.recipes[0].extendedIngredients.map(ingr => ingr.aisle).join(', ').toString() }, { name: 'ID', value: `${response.data.recipes[0].id}` }, { name: 'Minutes to do', value: `${response.data.recipes[0].readyInMinutes} minutes` })
                .setTimestamp()
            return await interaction.reply({ embeds: [mess] })

        } catch (error) {
            console.log(error)
            await interaction.reply(`:smiling_face_with_tear: Something wrong sir, please check you console`)
        }

    },
};