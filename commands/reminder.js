const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('reminder')
        .setDescription('Time')
        .addStringOption(option => option.setName('input').setDescription('Để tui nhắc bạn')),
    async execute(interaction) {
        const reminderString = interaction.options.getString('input');
        if (!reminderString) return await interaction.reply("Input something please")
        const parseCommand = reminderString.toLowerCase().split(' ')
        switch (parseCommand[0]) {
            case "sleep":
                await interaction.reply("Good night! " + parseCommand[1])
                break;
            default:
                break;
        }
    },
};