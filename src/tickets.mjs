// Добавление нулей в номер талона
export function padTicketNum(num) {
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
