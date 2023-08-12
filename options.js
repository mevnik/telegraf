const {Telegraf,Markup,Extra} = require('telegraf')


module.exports = {
	'gameOptions':
	    Markup.inlineKeyboard([
	          [Markup.callbackButton('1', '1'),
	          Markup.callbackButton('2', '2'),
	          Markup.callbackButton('3', '3')],
	          [Markup.callbackButton('4', '4'),
	          Markup.callbackButton('5', '5'),
	          Markup.callbackButton('6', '6')],
	          [Markup.callbackButton('7', '7'),
	          Markup.callbackButton('8', '8'),
	          Markup.callbackButton('9', '9')],
	          [Markup.callbackButton('0', '0')]


        ]).extra(), //без этого кнопок нет
        'againOptions':
    	  Markup.inlineKeyboard([
		      Markup.callbackButton('yes','yes'),
		      Markup.callbackButton('no','no')
	      ]).extra()
		   
}