

exports.startGame = function(ctx,gameOptions,numbers){
  numbers[ctx.chat.id] = Math.floor(Math.random() * 10)
      console.log('ID:',ctx.chat.id,'value:',numbers[ctx.chat.id])
      return ctx.reply("Let's play.\n What's my number?",
       gameOptions
      )
}
