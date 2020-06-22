'use strict';
const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('pls, enter password:');

switch (message){
  case ADMIN_PASSWORD:
    alert('Ласкаво просимо!');
    break;
  case null:
    alert ('Скасовано користувачем!');
    break;
  default:
    alert('Доступ заборонений, невірний пароль!');
    break; 
}


