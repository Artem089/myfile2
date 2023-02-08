// const express = require("express");

// const app = express();

// app.get("/", function(request, response){

//     response.end("Hello from Express!");
// });

// app.listen(3000);

// let name = process.argv[2];
// let age = process.argv[3];

// console.log("name: " + name);
// console.log("age: " + age);

// const http = require("http");

// let message = "Haa!";
// http
//   .createServer(function (request, response) {
//     console.log(message);
//     response.end(message);
//   })
//   .listen(3000, "127.0.0.1", () => {
//     console.log("Сервер начал прослушивание запросов");
//   });

// function displaySync(callback){
//     callback();
// }

// console.log("Начало работы программы");

// setTimeout(function(){

//         console.log("timeout 500");
// }, 500);

// setTimeout(function(){

//         console.log("timeout 100");
// }, 100);

// displaySync(function(){console.log("without timeout")});
// console.log("Завершение работы программы");

// const fs = require("fs");

// // асинхронное чтение
// fs.readFile("hello.txt", "utf8", function (error, data) {
//   console.log("Асинхронное чтение файла");
//   if (error) throw error; // если возникла ошибка
//   console.log(data); // выводим считанные данные
// });

// // синхронное чтение
// console.log("Синхронное чтение файла");
// let fileContent = fs.readFileSync("hello.txt", "utf8");
// console.log(fileContent);

// const fs = require("fs");

// fs.writeFile("hello.txt", "Hello мир!", function(error){

//     if(error) throw error; // если возникла ошибка
//     console.log("Асинхронная запись файла завершена. Содержимое файла:");
//     let data = fs.readFileSync("hello.txt", "utf8");
//     console.log(data);  // выводим считанные данные
// });

// const fs = require("fs");

// fs.appendFileSync("hello.txt", "Привет ми ми ми!");

// fs.appendFile("hello.txt", "Привет МИД!", function (error) {
//   if (error) throw error; // если возникла ошибка

//   console.log("Запись файла завершена. Содержимое файла:");
//   let data = fs.readFileSync("hello.txt", "utf8");
//   console.log(data); // выводим считанные данные
// });
