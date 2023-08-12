const {Telegraf,Markup,Extra} = require('telegraf')
const {gameOptions, againOptions} = require('./options.js')
const {startGame} = require('./assets.js')

require('dotenv').config()

// TOKEN test_endy
const bot = new Telegraf(process.env.TOKEN)

const numbers = {}


bot.command('game', (ctx) => {
      startGame(ctx,gameOptions,numbers)
    })
bot.action('yes',(ctx,next) => {
  startGame(ctx,gameOptions,numbers)
})


/* можно так
bot.action('one', (ctx, next) => {
  console.log(ctx.update.callback_query.data)
    return ctx.reply('👍').then(() => next())
})
*/

// а можно и так
bot.on('callback_query', (ctx, next) => {
  console.log('on',ctx.update.callback_query.data)
  //console.log(ctx)
  console.log(numbers[ctx.chat.id])

  if(numbers[ctx.chat.id] == Number(ctx.update.callback_query.data) ) {
    ctx.deleteMessage()
    return ctx.reply("👍\n Continue?",againOptions)}
  if(ctx.update.callback_query.data === 'no') return ctx.reply('By!').then(() => next())

  else {
    ctx.deleteMessage()
    return ctx.replyWithHTML("<b>&#129397;</b>\n Continue?",againOptions)
      }
})


  bot.on('message', async (ctx) => {
    const text = ctx.message.text;
    const chatId = ctx.chat.id;
    console.log('I get it',ctx.chat)
    console.log('I get it_2',ctx.message.chat)
    if (text === '/start') {
        await bot.telegram.sendMessage(chatId, 'https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.jpg');
        return bot.telegram.sendMessage(chatId, 'Received your message');
    }
    if (text === '/info') return bot.telegram.sendMessage(chatId, `Your name ${ctx.message.from.first_name} `);
    
    return bot.telegram.sendMessage(chatId,`You send me: "${text}".I do not undestand You! Your Test_Endy`)

  });
  bot.launch()
