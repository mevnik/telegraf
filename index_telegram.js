
  const TelegramBot = require('node-telegram-bot-api');
  require('dotenv').config()


// Token - test_endy
  const bot = new TelegramBot(process.env.TOKEN, {polling: true});
   bot.setMyCommands([
    {command:'/start',description: 'Hello'},
    {command:'/info',description: 'about'},
    {command:'/game',description: 'game'},

    ]);

   const gameOptions = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{text: 'first',collback_data: 'vot'}]
        ]
    })
   }

const start = () => {

  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log('I get it')
    if (text === '/start') {
        await bot.sendMessage(chatId, 'https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.jpg');
        return bot.sendMessage(chatId, 'Received your message');
    }
    if (text === '/info') return bot.sendMessage(chatId, `Your name ${msg.from.first_name} `);
    if (text === '/game') {
      const number = Math.floor(Math.random() * 10)

      bot.sendMessage(chatId, "let's play");
      return bot.sendMessage(chatId, "What's my number?");
    }
    return bot.sendMessage(chatId,`You send me: "${text}".I do not undestand You! Your Test_Endy`)

  });
};
start()