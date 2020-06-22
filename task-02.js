'use strict';
const total = 100;
let ordered = null;


ordered = prompt('enter how are you want?');

if (ordered<=total) {
  alert ('Замовлення оформлено, з вами зв\'яжеться менеджер');
}else{
  alert ('На складі недостатньо товарів!');
}



