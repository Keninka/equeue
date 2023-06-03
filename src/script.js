"use strict";

//Электронная очередь
/*
0. Открытие смены +/-;
1. Запрос талона;
2. Регистрация талона в массиве +;
3. Выдача талона. Ваш номер: XXXX, перед вами в очереди: YYYY человек;
4. Вывод номера талона на табло;
5. Движение очереди;
6. Вызов к окну;
- переадресация клиента в другое окно;
- статус: ведется прием;
- статус: прием окончен; 
Вызов следующего клиента.
7. Подсчет количества клиентов за текущий день. Среднее время у каждого окна;
8. Работа производится в определенный промежуток времени. После этого новые талоны не выдаются.
Когда обработаны все талоны, происходит закрытие смены.
*/

//Открытие смены
console.log("Смена открыта!");

//Общие массивы !!!

//Список всех активных талонов
let unservicedTickets = [];
//Список талонов, обслуживаемых в данный момент
let servicedTickets = [];
//Талоны, показанные на табло
let displayedTickets = [];
//Очередность талонов
let ticketsInLine = [];
//Номер текущего талона. Открытие смены меняет значение на 0. По умолчанию: -1
let yourTicketNumber = -1;

//Общие функции !!!

//Добавление нулей в номер талона

const padZeroes = function () {
  let zeroes = "";
  if (yourTicketNumber >= 0 && yourTicketNumber < 10) {
    zeroes = "000";
  } else if (yourTicketNumber >= 10 && yourTicketNumber < 100) {
    zeroes = "00";
  } else if (yourTicketNumber >= 100 && yourTicketNumber < 1000) {
    zeroes = "0";
  } else {
    zeroes = "";
  }
  return zeroes;
};

//Вывод информации о взятом талоне
const takenTicketInfo = function () {
  console.log(`Номер вашего талона: ${padZeroes() + yourTicketNumber}`);
  console.log(`Перед вами в очереди: ${unservicedTickets.length - 1} человек`);
};

//Операции при взятии талона
const takeTicketAction = function () {
  if (yourTicketNumber === -1) {
    //Потом добавить время окончания смены
    console.log(`Смена закрыта. Новые талоны не выдаются!`);
    //Сброс счетчика активных талонов
    unservicedTickets = [];
  } else {
    yourTicketNumber++;
    unservicedTickets.push(padZeroes() + yourTicketNumber);
    takenTicketInfo();
    console.log(unservicedTickets);
  }
};

//Закрытие талона
const takenTicketRemover = function () {
  let ticket2RemoveMessage = prompt(
    `Какой талон вы хотите удалить? Текущие талоны: ${unservicedTickets}`
  );
  let ticket2RemoveNumber = parseInt(ticket2RemoveMessage, 10);

  if (isNaN(ticket2RemoveNumber)) {
    console.log(`Введите номер талона правильно!`);
  } else {
    //Дописать удаление талона из массива unservicedTickets и ticketsInLine
    console.log(`Талон ${padZeroes() + ticket2RemoveNumber} удален!`);
    //Даже если его и не было
  }
};

//Открытие и закрытие смены
let shiftSwitch = function () {
  //Можно как-то упростить код здесь с помощью ternary operator?
  if (yourTicketNumber === -1) {
    yourTicketNumber = 0;

    document.querySelector(".status-window").style.background = "green";
    document.querySelector(".status-window").textContent = "ВЕДЕТСЯ ПРИЕМ";
    document.querySelector("#shift-switch").textContent = "ЗАКРЫТИЕ СМЕНЫ";
  } else {
    yourTicketNumber = -1;

    document.querySelector(".status-window").style.background = "red";
    document.querySelector(".status-window").textContent = "ПРИЕМ ОКОНЧЕН";
    document.querySelector("#shift-switch").textContent = "ОТКРЫТИЕ СМЕНЫ";
  }
};

//Вызвать талон
const allTicketsDisplay = function () {
  let ticket2CallMessage = prompt(
    `Какой талон вы хотите вызвать? Текущие талоны: ${unservicedTickets}`
  );
  console.log(`Вызван талон номер ${padZeroes() + ticket2CallMessage}`);
};
