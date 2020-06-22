'use strict';

let nameCountry = prompt('Куди доставити?');

nameCountry = nameCountry.toLowerCase();



switch (true){
  case nameCountry === 'китай':
    alert('Доставка в Китай буде коштувати 100 кредитів');
    break;
  case nameCountry === 'чілі':
    alert('Доставка в Чілі буде коштувати 250 кредитів');
    break;
  case nameCountry === 'австралія':
    alert('Доставка в Австралію буде коштувати 170 кредитів');
    break;
  case nameCountry === 'індія':
    alert('Доставка в Індію буде коштувати 80 кредитів');
    break;
  case nameCountry === 'ямайка':
    alert('Доставка в Ямайку буде коштувати 120 кредитів');
    break;
  default:
    alert('У вашій країні доставка недоступна');
    break;
}

