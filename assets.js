const{sequelize} = require('./db.js')
const{Chat} = require('./models.js')

exports.startGame = async (ctx,gameOptions,numbers) => {


  numbers[ctx.chat.id] = Math.floor(Math.random() * 10)
      console.log('ID:',ctx.chat.id,'value:',numbers[ctx.chat.id])
      return ctx.reply("Let's play.\n What's my number?",
       gameOptions
      )
}

