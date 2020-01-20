var str = prompt('Введите своё имя');
console.log(str);
var num = +prompt('Введите свой возраст');
console.log(num);
var exam1 = prompt('Решите пример 7 + 2 = ?');
if( exam1 == 9) {
  console.log('Пример 1: 7 + 2 = ' + (7 + 2) + ' (Ваш ответ 9)');  
}else {
    console.log(' Пример 1: Ответ не верный');
}
var exam2 = prompt('Решите пример 12 - 8 = ?');
if( exam2 == 4) {
  console.log('Пример 2: 12 - 8 = ' + (12 - 8) + ' (Ваш ответ 4)');  
}else {
  console.log(' Пример 2: Ответ не верный');
}
var exam3 = prompt('Решите пример 4 * 6 = ?');
if( exam3 == 24) {
  console.log('Пример 3:  4 * 6 = ' + 4 * 6 + ' (Ваш ответ 24)');  
}else {
  console.log(' Пример 3: Ответ не верный');
}
var exam4 = prompt('Решите пример 32 / 4 = ?');
if( exam4 == 8) {
  console.log('Пример 4:  32 / 4 = ' + 32 / 4 + ' (Ваш ответ 8)');  
}else {
  console.log(' Пример 4: Ответ не верный');
}
var exam5 = prompt('Решите пример 90 % 20 = ?');
if( exam5 == 10) {
  console.log('Пример 5:  90 % 20 = ' + 90 % 20 + ' (Ваш ответ 10)');  
}else {
  console.log(' Пример 5: Ответ не верный');
}
alert('Перейдите в Console чтобы узнать свой результат')