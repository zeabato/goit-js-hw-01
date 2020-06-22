'use strict';

let priceCountry = {'китай': 100, 'чілі': 250, 'австралия': 170, 'індія': 80, 'ямайка': 120}

let nameCountry = prompt('Куди доставити?');

nameCountry = nameCountry.toLowerCase();


switch (nameCountry){
  case 'китай':
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry.китай} кредитів`);
    break;
  case 'чілі':
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry.чілі} кредитів`);
    break;
  case 'австралія':
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry.австралия} кредитів`);
    break;
  case 'індія':
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry.індія} кредитів`);
    break;
  case 'ямайка':
    alert(`Доставка в ${nameCountry} буде коштувати ${priceCountry.ямайка} кредитів`);
    break;
  default:
    alert('У вашій країні доставка недоступна');
    break;
}

