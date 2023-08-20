const {Telegraf,Markup,Extra} = require('telegraf')
const {gameOptions, againOptions} = require('./options.js')
const {startGame} = require('./assets.js')
const{sequelize} = require('./db.js')
const{Chat} = require('./models.js')

require('dotenv').config()

const bot = new Telegraf(process.env.TOKEN_test_endy)
//const bot = new Telegraf(process.env.TOKEN_test_mevnik)


const numbers = {}


bot.command('game', async(ctx) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    const chatId = ctx.chat.id;
       const data = await Chat.findOne({where:{chatId: String(chatId)}})

      if(data === null) {
       const test = await Chat.create({chatId:String(chatId)})

      }
      //if(data != null){
        //if(chatId != data.chatId) await Chat.create({chatId:String(chatId)})

     // }

    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
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

bot.on('callback_query', async(ctx, next) => {

    const chatId = ctx.chat.id;

      const data = await Chat.findOne({where:{chatId: String(chatId)}})
     // const data = await Chat.findOne({chatId})

  if(numbers[chatId] == Number(ctx.update.callback_query.data) ) {
    ctx.deleteMessage()
      data.right += 1
      await data.save();
    return ctx.reply("👍\n Continue?",againOptions)}
  if(ctx.update.callback_query.data === 'no') return ctx.reply('By!').then(() => next())

  else {
    ctx.deleteMessage()
    data.wrong += 1
      await data.save();
    return ctx.replyWithHTML("<b>&#129397;</b>\n Continue?",againOptions)
      }
})



  bot.on('message', async (ctx) => {



    const text = ctx.message.text;
    const chatId = ctx.chat.id;
    //console.log('I get it',ctx.chat)
    //console.log('I get it_2',ctx.message.chat)//тоже самое
    if (text === '/start') {
        await bot.telegram.sendMessage(chatId, 'https://tlgrm.eu/_/stickers/ea5/382/ea53826d-c192-376a-b766-e5abc535f1c9/7.jpg');
        return bot.telegram.sendMessage(chatId, 'Received your message');
    }
    if (text === '/info') {

      const data = await Chat.findOne({where:{chatId:String(chatId)}})

      if(data){

            return bot.telegram.sendMessage(chatId, `Your name ${ctx.message.from.first_name} right: ${data.right} wrong: ${data.wrong} `);
      }
      else  return bot.telegram.sendMessage(chatId,`Your game info just empty! Start game! Your Test_Endy`)
    }
    return bot.telegram.sendMessage(chatId,`You send me: "${text}".I do not undestand You! Your Test_Endy`)

  });
  bot.launch()
