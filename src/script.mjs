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

function padTicketNum(num) {
  if (num >= 0 && num < 10) {
    return "000";
  } else if (num >= 10 && num < 100) {
    return "00";
  } else if (num >= 100 && num < 1000) {
    return "0";
  } else {
    return "";
  }
}

//Вывод информации о взятом талоне
function takenTicketInfo() {
  console.log(
    `Номер вашего талона: ${padTicketNum(yourTicketNumber) + yourTicketNumber}`
  );
  console.log(`Перед вами в очереди: ${unservicedTickets.length - 1} человек`);
}

//Операции при взятии талона
window.takeTicketAction = function () {
  if (yourTicketNumber === -1) {
    //Потом добавить время окончания смены
    console.log(`Смена закрыта. Новые талоны не выдаются!`);
    //Сброс счетчика активных талонов
    unservicedTickets = [];
  } else {
    yourTicketNumber++;
    unservicedTickets.push(padTicketNum(yourTicketNumber) + yourTicketNumber);
    takenTicketInfo();
    console.log(unservicedTickets);
  }
};

//Закрытие талона
window.takenTicketRemover = function () {
  let ticket2RemoveMessage = prompt(
    `Какой талон вы хотите удалить? Текущие талоны: ${unservicedTickets}`
  );
  let ticket2RemoveNumber = parseInt(ticket2RemoveMessage, 10);

  if (isNaN(ticket2RemoveNumber)) {
    console.log(`Введите номер талона правильно!`);
  } else {
    //Дописать удаление талона из массива unservicedTickets и ticketsInLine
    console.log(
      `Талон ${padTicketNum(yourTicketNumber) + ticket2RemoveNumber} удален!`
    );
    //Даже если его и не было
  }
};

//Открытие и закрытие смены
window.shiftSwitch = function () {
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
window.allTicketsDisplay = function () {
  let ticket2CallMessage = prompt(
    `Какой талон вы хотите вызвать? Текущие талоны: ${unservicedTickets}`
  );
  console.log(
    `Вызван талон номер ${padTicketNum(yourTicketNumber) + ticket2CallMessage}`
  );
};
