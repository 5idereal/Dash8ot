const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('car')
		.setDescription('replies with a random nhentai link'),
	async execute(interaction) {
		await interaction.reply("https://nhentai.net/g/" + Math.floor((Math.random() * 320000) + 1));
	},
};