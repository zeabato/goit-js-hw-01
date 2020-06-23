'use strict';

// let priceCountry = {'китай': 100, 'чілі': 250, 'австралия': 170, 'індія': 80, 'ямайка': 120}

let nameCountry = prompt('Куди доставити?');

nameCountry = nameCountry.toLowerCase();
let priceCountry = null;

switch (nameCountry){
  case 'китай':
    priceCountry = 100;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry} кредитів`);
    break;
  case 'чілі':
    priceCountry = 250;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry} кредитів`);
    break;
  case 'австралія':
    priceCountry = 170;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry} кредитів`);
    break;
  case 'індія':
    priceCountry = 80;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry} кредитів`);
    break;
  case 'ямайка':
    priceCountry = 120;
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry} кредитів`);
    break;
  default:
    alert('У вашій країні доставка недоступна');
    break;
}

