'use strict';
let credits = 23580;
let pricePerDroid = 3000;
let countDroid = prompt('скільки треба дроїдів?');
let totalPrice;
if (countDroid === null){
  alert ('Скасовано користувачем!');
}else{
  totalPrice = pricePerDroid * countDroid;
}

if (credits < totalPrice){
  console.log('Недостатньо коштів на рахунку!');
}else{
  credits -= totalPrice;

  alert('Ви купили ' + countDroid + ' дроїдів, на рахунку залишилося ' + credits + ' кредитів.');
}
