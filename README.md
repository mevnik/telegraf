https://www.youtube.com/watch?v=MzO-0IYkZMU&t=325s

Для установки react-app пришлось обновить версию node и npm:
https://slicks.name/web-dev/update-node-npm-versions-on-linux-or-mac.html
а затем выполнить: sudo chown -R 501:20 "/Users/evgeniimoseikin/.npm"
После этого уже: npx create-react-app .
nodemon не устанавливаю, т.к. в terminuse перезагрузка происходит автоматически при любом изменении
Далее: https://www.npmjs.com/package/node-telegram-bot-api
BotFather
test_mevnik
name: TestMevnikBot
token: 6587301044:AAF1P1OmRMyWdw_opkC0E5mLKGKLodI5HUM

Попытки запустить new TelegramBot(token, {polling: true}) из react-app не удались. Явно не стыкуются версии react, webpack и node-telegram-bot.
Хотя проделал следующее:
1. устранил node core moduleerror https://www.alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5
2. устранил Module not found: Error: Can't resolve 'fs','net', 'tls' 
   https://bobbyhadz.com/blog/module-not-found-cant-resolve-fs#:~:text=The%20error%20%22Module%20not%20found,json%20file.
   https://bobbyhadz.com/blog/module-not-found-error-cant-resolve-tls
3. Уперся в "Cannot read properties of undefined (reading 'split') in JS"  
   https://bobbyhadz.com/blog/javascript-cannot-read-property-split-of-undefined

После этого создал новую папку front_2 где  инициализировал npm, загрузил node-telegram-bot, создал файл index.js и запускаю его командой node index.js
Бот заработал.
Этот вариант рассматривался:https://www.youtube.com/watch?v=slcqnHIFrj8&t=0s
Вот пример такого же решения: https://archakov.im/post/telegram-bot-on-nodejs

Для стикеров:
https://tlgrm.eu/stickers
Но не каждый стикер открывается для получения ссылки

У telegram очень плдохо с документацией, поэтому перешел на telegraf(папка telegraf).Здесь несколько лучше, но тоже многое только на примерах(Markup)
Вот ролики по telegraf:
https://www.youtube.com/watch?v=IAG8-dnCdtg


https://telegrafjs.org/#/?id=introduction
https://github.com/telegraf/telegraf/blob/3.38.0/docs/examples/keyboard-bot.js

Коды эмодзи здесь:
https://st-lt.ru/blog/emodzi-v-formate-html-v-chem-ix-seo-preimushhestvo.html
http://as3coder.blogspot.com/2014/08/emoji.html


 об require и import look https://www.freecodecamp.org/news/how-to-use-the-javascript-require-function/
 https://www.sitepoint.com/understanding-module-exports-exports-node-js/

about env  and dotenv in node look:
 https://nodejs.dev/en/learn/how-to-read-environment-variables-from-nodejs/#telegraf
