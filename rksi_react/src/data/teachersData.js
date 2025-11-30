import { teacherOptions, commonOptions } from './commonData';

export const teachersInitialData = [
  { id: 1, name: 'Куракова', startDate: '01-09-2025', endDate: '31-12-2025', reason: 'Больничный' },
  { id: 2, name: 'Черевко', startDate: '01-09-2025', endDate: '31-12-2025', reason: 'Больничный' },
];

export const teachersColumns = [
  { key: 'name', title: 'Преподаватель', type: 'select'},
  { key: 'startDate', title: 'С даты', type: 'date' },
  { key: 'endDate', title: 'По дату', type: 'date' },
  { key: 'reason', title: 'Причина', type: 'select', placeholder: 'Выберите причину' }
];

export const teachersAvailableOptions = {
  name: teacherOptions,
  reason: commonOptions.reasons
};