const TelegramApi = require('node-telegram-bot-api')

const token = '5655757734:AAGkgU16KR7MS1QEnouEWKCyr2ZHt9JQnQA'

const bot = new TelegramApi(token, {polling: true})



const start = () => {
	bot.setMyCommands([
	{command: '/start', description: 'Hello World'},
	{command: '/info', description: 'About this bot'},
])

bot.on('message', async msg => {
	const text = msg.text;
	const chatId = msg.chat.id;

	if(text === '/start') {
		await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/7.webp')
		return bot.sendMessage(chatId, `Welcome, ${msg.from.first_name} !`)
	}
	if(text === '/info') {
		return bot.sendMessage(chatId, `This Bot is monitoring Databases !`)
	}
	return bot.sendMessage(chatId, `I don't understand !`)
})
}

start()