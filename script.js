//функция вычисления суммы после конвертацию
function convert() {
let currency = document.getElementById('valuta');
let valuess = currency.options[currency.selectedIndex].getAttribute('data-cost'); //берем нужный курс, выбранной пользователем валюты
let Rub= document.getElementById('ruble');
let result= document.getElementById('result');
result.value = Math.round(Rub.value / valuess * 1000)/1000; //вычисляем результат и ограничиваем его до тысячных после запятой
}
//отправка письма на введенный пользователем email через почтовый клиент пользователя
function sendMail() {
document.myform.action="mailto:"+document.getElementById('email').value; //подставляем email пользователя
document.getElementById('result').removeAttribute("disabled"); //разблокируем поле с результатом, чтобы оно тоже отправилось
myform.submit(); //отправляем данные на почтовый клиент для отправки
document.getElementById('result').setAttribute("disabled", "true"); //блокируем поле с результатом

}