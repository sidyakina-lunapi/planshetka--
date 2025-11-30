import { useState } from 'react';

export const useDisplayFields = () => {
  const [visibleFields, setVisibleFields] = useState({
    Место: true,
    Аудитория: true,
    Дисциплина: true,
    Группа: true,
    Преподаватель: true,
    Мероприятие: true
  });

  const updateVisibleFields = (selectedOptions) => {
    const newVisibility = {};
    
    Object.keys(visibleFields).forEach(field => {
      newVisibility[field] = false;
    });
    
    selectedOptions.forEach(option => {
      if (visibleFields.hasOwnProperty(option)) {
        newVisibility[option] = true;
      }
    });
    
    setVisibleFields(newVisibility);
  };

  return {
    visibleFields,
    updateVisibleFields
  };
};