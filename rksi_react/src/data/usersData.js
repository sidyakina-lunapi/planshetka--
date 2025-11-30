import { commonOptions } from './commonData';

export const usersInitialData = [
  { 
    id: 1,  
    name: 'Сидякина София', 
    position: 'Администратор', 
    email: 'example@rksi.ru' 
  },
  { 
    id: 2,  
    name: 'Раенко Даниил', 
    position: 'Администратор', 
    email: 'example2@rksi.ru' 
  },
  { 
    id: 3,  
    name: 'Огиенко Максим', 
    position: 'Студент', 
    email: 'example3@rksi.ru' 
  },
];

export const usersColumns = [
  { key: 'name', title: 'Имя и фамилия', type: 'input'},
  { key: 'position', title: 'Должность', type: 'select'},
  { key: 'email', title: 'Почта', type: 'input'},
];

export const usersAvailableOptions = {
  position: commonOptions.positions
};