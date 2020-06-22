'use strict';

let nameCountry = prompt('Куди доставити?');

nameCountry = nameCountry.toLowerCase();



switch (nameCountry){
  case 'китай':
    alert('Доставка в Китай буде коштувати 100 кредитів');
    break;
  case 'чілі':
    alert('Доставка в Чілі буде коштувати 250 кредитів');
    break;
  case 'австралія':
    alert('Доставка в Австралію буде коштувати 170 кредитів');
    break;
  case 'індія':
    alert('Доставка в Індію буде коштувати 80 кредитів');
    break;
  case 'ямайка':
    alert('Доставка в Ямайку буде коштувати 120 кредитів');
    break;
  default:
    alert('У вашій країні доставка недоступна');
    break;
}

