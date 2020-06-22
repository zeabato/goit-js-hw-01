'use strict';

let input = 0;
let totals = 0;

do {
  totals += parseInt(input);
  input = prompt('ведіть число:');
} while (input != null)
alert('Загальна сума чисел дорівнює ' + totals);

