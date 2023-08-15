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


Еще раз про github
Создаем репазитарий. Если сразу инициализировать файл READMD не получится 
push проекта. Можно только clone созданного репазитария:
В любой папке делаю git clone https://github.com/mevnik/telegraf_bot.git (например)
Чтобы пушить свой проект не инициализируем файл READMD и тогда действуем по схеме
 git init
git add . если все файлы,  или git add "name file", если конкретный файл
   или, git add -A, если все модифицированные и добавленные файлы
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/mevnik/telegraf_bot.git (например)
git push -u origin main

На любом этапе можно посмотреть git status

Вместо пароля требуется ключ
Получаем так:
авотар->Settings->Developer settings->Personal access tokens->Tokens(или Fine-grained tokens)->Generate new token

Удаление репозитория:
в строке опций Settings-> внизу страницы Danger Zone -> Delete this repository
Получение изменений сделанных кем-то в репозитарии (например, с другого компа):
   git pull
Можно посмотреть все команды git просто командой git.
Если тупиковая ситуация в терминале (что-то сделали не так), нажимаем esc и вводим :wq

Про ssh:
  В данный момент у меня на FASTVPS только один сервер с IP 159.253.18.191
  Сбросил реквизиты доступа для 159.253.18.191
Для этого «мои услуги»-> «#174856 EVO-SAS-1.1» ->в вешнем меню «Управление»-> «сброс пароля» и получаю на почту
Новые:
#174856 EVO-SAS-1.1 - 159.253.18.191
IP адрес	159.253.18.191
Имя пользователя	root
Пароль	______________
Порт	22 (SSH)
Теперь в командной строке могу получить доступ по ssh
ssh root@159.253.18.191
Можем перейти в нужную директорию в которой мы хотим редактировать или добавлять файлы.
Например, для редактирования содержимого созданного мною сайта с поддоменом telegraf.allof.best переходим в корень cd ../
Двигаемся по директории:
    cd var
    cd www
    cd fastuser
    cd data
    cd www
    cd «папка с нужным сайтом»

Подключился по ssh, создал папку telegram_bot в директории /var/www/fastuser/data/www
Перешел в папку telegram_bot
Выполнил команды 
   sudo apt update (Рекомендуется сначала проделать эту команду https://pingvinus.ru/note/apt - здесь про apt)
   sudo apt install git
   sudo apt install nodejs
   sudo apt install npm
   git clone ****(с моего репозитария)
Получил в папке telegram_bot папку telegraf


