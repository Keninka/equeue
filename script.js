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
//Номер текущего талона. Открытие смены меняет значение на 0. По умолчанию: -1
let yourTicketNumber = -1;

//Общие функции !!!

//Добавление нулей в номер талона
const zeroAdder = function () {
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
  console.log(`Номер вашего талона: ${zeroAdder() + yourTicketNumber}`);
  console.log(`Перед вами в очереди: ${unservicedTickets.length - 1} человек`);
};

//Операции при взятии талона
window.takeTicketAction = function () {
  if (yourTicketNumber === -1) {
    //Потом добавить время окончания смены
    console.log(`Смена закрыта. Новые талоны не выдаются!`);
  } else {
    yourTicketNumber++;
    unservicedTickets.push(yourTicketNumber);
    takenTicketInfo();
    console.log(unservicedTickets);
  }
};

//Открытие и закрытие смены
window.shiftSwitch = function () {
  if (yourTicketNumber === -1) {
    yourTicketNumber = 0;
    document.querySelector(".status-window").style.background = "green";
    document.querySelector(".status-window").textContent = "ВЕДЕТСЯ ПРИЕМ";
    document.querySelector("#shift-switch").textContent = "ЗАКРЫТИЕ СМЕНЫ";
    console.log(yourTicketNumber);
  } else {
    yourTicketNumber = -1;
    document.querySelector(".status-window").style.background = "red";
    document.querySelector(".status-window").textContent = "ПРИЕМ ОКОНЧЕН";
    document.querySelector("#shift-switch").textContent = "ОТКРЫТИЕ СМЕНЫ";
    console.log(yourTicketNumber);
  }
};

window.allTicketsDisplay = function () {};

const takenTicketRemover = function () {};

/*
const takenTickedAdder = function () {
    const newTicket = 
};






*/

// Начало программы !!!
