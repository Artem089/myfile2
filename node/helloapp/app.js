// console.log("Hello world");

// Запуск сервер!
// const http = require("http");
// http
//   .createServer(function (request, response) {
//     response.end("Молодец, у тебя получилось!");
//   })
//   .listen(4000, function () {
//     console.log("Сервер начал прослушивание запросов на порту 4000");
//   });

// Модули

// const os = require("os");
// const greeting = require("./greeting");

// let userName = os.userInfo().username;

// console.log(`Дата запроса: ${greeting.date}`);
// console.log(greeting.getMessage(userName));

// const User = require("./user.js");

// let eugene = new User("Панкратион", 32);
// eugene.sayHi();

// Работа с модулями

// var greeting1 = require("./greeting.js");
// console.log(`Hello ${greeting1.name}`);

// var greeting2 = require("./greeting.js");
// greeting2.name = "Bob";

// console.log(`Hello ${greeting2.name}`);
// console.log(`Hello ${greeting1.name}`);

// const welcome = require("./welcome");

// welcome.getMorningMessage();
// welcome.getEveningMessage();

// Объект global и глобальные переменные

// const greeting = require("./greeting");

// global.name = "Eugene";

// global.console.log(date);
// console.log(greeting.getMessage());

// let nodePath = process.argv[0];
// let appPath = process.argv[1];
// let name = process.argv[2];
// let age = process.argv[3];

// console.log("nodePath: " + nodePath);
// console.log("appPath: " + appPath);
// console.log();
// console.log("Имя: " + name);
// console.log("Возраст: " + age);

