module.exports = {
    name: 'interactionCreate',
    async execute(interaction) {
        console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`)

        if (!interaction.isCommand()) return

        const client = interaction.client

        const command = client.commands.get(interaction.commandName)

        if (!command) await interaction.reply({ content: `There was an error while executing ${command}`, ephemeral: true })

        try {
            await command.execute(interaction)
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true })
        }
    },
};