const{sequelize} = require('./db.js')

exports.startGame = async function(ctx,gameOptions,numbers){

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  numbers[ctx.chat.id] = Math.floor(Math.random() * 10)
      console.log('ID:',ctx.chat.id,'value:',numbers[ctx.chat.id])
      return ctx.reply("Let's play.\n What's my number?",
       gameOptions
      )
}
/*

const{connection} = require('./db.js')

exports.startGame = async function(ctx,gameOptions,numbers){

  try {
    await connection.query("SHOW TABLES",
      function(err, results) {
        if(err) console.log(err);
        else console.log(results);
    });
    console.log('Connection has been established successfully.');
    connection.end();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  numbers[ctx.chat.id] = Math.floor(Math.random() * 10)
      console.log('ID:',ctx.chat.id,'value:',numbers[ctx.chat.id])
      return ctx.reply("Let's play.\n What's my number?",
       gameOptions
      )
}
*/