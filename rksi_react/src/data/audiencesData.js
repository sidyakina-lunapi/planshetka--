import { commonOptions } from './commonData';

export const audiencesInitialData = [
  { 
    id: 1, 
    building: '1', 
    audience: '422', 
    unavailablePairs: 'С 6.. по 7', 
    startDate: '01.09.2024', 
    endDate: '31.12.2024', 
    reason: 'Ремонт' 
  },
  { 
    id: 2, 
    building: '2', 
    audience: '211', 
    unavailablePairs: 'C 4.. по 5', 
    startDate: '01.09.2024', 
    endDate: '31.12.2024', 
    reason: 'Мероприятие' 
  },
];

export const audiencesColumns = [
  { key: 'building', title: 'Корпус', type: 'select'},
  { key: 'audience', title: 'Аудитория', type: 'select'},
  { key: 'unavailablePairs', title: 'Недоступные пары'},
  { key: 'startDate', title: 'С даты', type: 'date' },
  { key: 'endDate', title: 'По дату', type: 'date' },
  { key: 'reason', title: 'Причина', type: 'select'}
];

export const audiencesAvailableOptions = {
  building: commonOptions.buildings,
  audience: commonOptions.audiences,
  reason: commonOptions.reasons
};