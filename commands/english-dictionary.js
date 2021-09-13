const { SlashCommandBuilder } = require('@discordjs/builders')
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const axios = require('axios')
const apiUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/'
const wordDef = require('../utils/word-defination')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('voc')
        .setDescription('Search the meaning of vocabbulary')
        .addStringOption(option => option.setName('input')
            .setDescription('Which word...?')
            .setRequired(true)
        ),
    async execute(interaction) {
        const searchRegExp = /[^A-Za-z ]+/g
        const word = interaction.options.getString('input').replaceAll(searchRegExp, "").toLowerCase()

        if (word.indexOf(' ') >= 0) {
            const cambridgeLink = new MessageActionRow()
                .addComponents(
                    new MessageButton()
                    .setLabel('Link to Cambridge Dictionary')
                    .setStyle('LINK')
                    .setURL(`https://dictionary.cambridge.org/dictionary/english/${word.replaceAll(' ', '-')}`)
                )
            const mess = new MessageEmbed()
                .setColor('#0099ff')
                .setTitle(`${word}`)
                .addFields({ name: 'Hmmmm :yawning_face: ', value: 'Please try Cambridge Dictionary' })
                .setTimestamp()
            return await interaction.reply({ embeds: [mess], components: [cambridgeLink] })
        }

        try {
            const response = await axios.get(apiUrl + word)
            console.log(response.data)

            if (response.status === 200) {
                const mess = new MessageEmbed()
                    .setColor('#0099ff')
                    .setTitle(`${response.data[0].word}`)
                    .addFields(...wordDef(response.data[0]))
                    .setTimestamp()

                const row = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setLabel('Audio')
                        .setStyle('LINK')
                        .setURL(response.data[0].phonetics[0] ? `https:${response.data[0].phonetics[0].audio}` : `https://dictionary.cambridge.org/dictionary/english/${word}`),
                    );
                const cambridgeLink = new MessageActionRow()
                    .addComponents(
                        new MessageButton()
                        .setLabel('Link to Cambridge Dictionary')
                        .setStyle('LINK')
                        .setURL(`https://dictionary.cambridge.org/dictionary/english/${word}`)
                    )
                return await interaction.reply({ embeds: [mess], components: [row, cambridgeLink] })
            }

        } catch (error) {
            console.log(error)
            await interaction.reply(`:smiling_face_with_tear: Maybe I can\'t find that word`)
        }

    },
};