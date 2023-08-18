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

Важно! Загружать надо версию telegraf@3.38.0 --save из https://telegrafjs.org/#/?id=installation
Не в коем случае не npm install telegraf (загрузится последняя версия 4.12 а здесь не работает Markup.callbackButton). В этой версии все иначе: https://github.com/telegraf/telegraf/releases/tag/v4.0.0
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
и ввожу пароль ____________
Можем перейти в нужную директорию в которой мы хотим редактировать или добавлять файлы.
Например, для редактирования содержимого созданного мною сайта с поддоменом telegraf.allof.best переходим в корень cd ../
Двигаемся по директории:
    cd var
    cd www
    cd fastuser
    cd data
    cd www
    cd «папка с нужным сайтом»

cd ../var/www/fastuser/data/www/telegram_bot/telegraf

Подключился по ssh, создал папку telegram_bot в директории /var/www/fastuser/data/www
Перешел в папку telegram_bot
Выполнил команды 
   sudo apt update (Рекомендуется сначала проделать эту команду https://pingvinus.ru/note/apt - здесь про apt)
   sudo apt install git
   sudo apt install nodejs
   sudo apt install npm
   git clone ****(с моего репозитария)
Получил в папке telegram_bot папку telegraf
В ней теперь (только сначала uninstoll telegraf, т.к. последняя версия не работает с и install telegraf@3.38.0) можно npm start
и бот работает!
При этом он работает даже после разрыва соединения по ssh и закрытия терминала,
хотя автор устанавливает pm2 (npm install pm2 -g)глобально и запускает pm2 start index.js
Для production лучше pm2, а не nodemon. pm2 можно остановить командой pm2 stop index.js
Если снова по зайти в директорию, то можно остановить процесс так:
   1. Смотрим все процессы ps -ef
   2. Находим наш(nodemon index.js)
   3. Убиваем его  kill -9 (его PID)
Выйти из ssh можно командами exit, но тогда при повторном входе требует fingeprint.
Мне удалось решить проблему командой ssh -i ~/.ssh/authorized_keys root@159.253.18.191
(https://askubuntu.com/questions/311558/ssh-permission-denied-publickey)

для работы с базой данных инсталировал sequelize и mysql2, создал файлы db, models, подключил sequelize в файле assets, но при запуске получаю ошибку
/var/www/fastuser/data/www/telegram_bot/telegraf/node_modules/mysql2/node_modules/lru-cache/dist/cjs/index.js:51
    heap;
Предположил, что дело в версии node, однако поставить версию выше 10-ой через apt не удается
Примечание:
   Параметры для подключения к базе (db.js)для macAir 
               DB_NAME=myDB
               DB_USER=root
               DB_PASSWORD=password
               DB_HOST=localhost
               DB_PORT=3306
         для mevnik@dael
               DB_NAME=new_database
               DB_USER=root
               DB_PASSWORD=password
               DB_HOST=localhost
               DB_PORT=3306
         для FASTVPS
               DB_NAME=telegram
               DB_USER=telegram_usr
               DB_PASSWORD=CgbURcSZ6tDTBRHa
               DB_HOST=localhost
               DB_PORT=3306




