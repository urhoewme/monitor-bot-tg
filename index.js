const TelegramApi = require('node-telegram-bot-api')
const { Sequelize } = require('sequelize')
const token = '5655757734:AAGkgU16KR7MS1QEnouEWKCyr2ZHt9JQnQA'
const sequelize = require('./db.js')
const UserModel = require('./models.js')
const bot = new TelegramApi(token, {polling: true})

try{
		await sequelize.authenticate();
		console.log('Connection established');
		await sequelize.sync();
	} catch(e) {
		console.log('Unnable to connect to the database:',e);
	}

const start = async () => {

	

	bot.setMyCommands([
	{command: '/start', description: 'Hello World'},
	{command: '/info', description: 'About this bot'},
])

bot.on('message', async msg => {
	const text = msg.text;
	const chatId = msg.chat.id;

	try {
		if(text === '/start') {

		await UserModel.create({chatId})
		
		await bot.sendSticker(chatId, 'https://tlgrm.eu/_/stickers/ccd/a8d/ccda8d5d-d492-4393-8bb7-e33f77c24907/7.webp')
		return bot.sendMessage(chatId, `Welcome, ${msg.from.first_name} !`)
	}
	if(text === '/info') {
		const user = await UserModel.findOne({chatId});
		return bot.sendMessage(chatId, `This Bot is monitoring Databases !`)
	}
	return bot.sendMessage(chatId, `I don't understand !`)
	} catch (e) {
		return bot.sendMessage(chatId,'Error');
	}

	
})
}

start()