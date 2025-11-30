import { commonOptions, teacherOptions, disciplineOptions, groupOptions } from './commonData';

export const replacementInitialData = {
  building: '',
  roomNumber: '',
  discipline: '',
  lastName: '',
  group: '',
  date: '',
  reason: '',
  pair: '',
  transfer: '',
  cause: '',
  status: 0
};

export const replacementOptions = {
  building: commonOptions.buildings,
  roomNumber: commonOptions.audiences,
  discipline: disciplineOptions,
  lastName: teacherOptions,
  group: groupOptions,
  pair: commonOptions.pairs,
  reason: commonOptions.reasons, 
  transfer: commonOptions.transferOptions
};