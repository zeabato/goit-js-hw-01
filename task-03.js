'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('pls, enter password:');

switch (true){
  case ADMIN_PASSWORD === message:
    alert('Ласкаво просимо!');
    break;
  case message === null:
    alert ('Скасовано користувачем!');
    break;
  case ADMIN_PASSWORD != message:
    alert('Доступ заборонений, невірний пароль!');
    break; 
}


