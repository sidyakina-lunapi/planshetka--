import { useState, useMemo } from 'react';

export const useScheduleFilters = (scheduleData) => {
  const [filters, setFilters] = useState({
    building: '',
    teacher: '',
    audience: '',
    discipline: '',
    group: '',
    event: '',
    date: '',
    showEmpty: false
  });

  const updateFilter = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const availableDates = useMemo(() => {
    const dates = [...new Set(scheduleData.map(item => item.date))];
    
    return dates.sort((a, b) => {
      const [dayA, monthA, yearA] = a.split('.').map(Number);
      const [dayB, monthB, yearB] = b.split('.').map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      return dateA - dateB;
    });
  }, [scheduleData]);

  const filteredData = useMemo(() => {
    let result = scheduleData;

    if (filters.building) {
      result = result.filter(item => 
        item.building === parseInt(filters.building.replace('Корпус ', ''))
      );
    }

    if (filters.teacher) {
      result = result.filter(item => item.lastName === filters.teacher);
    }

    if (filters.audience) {
      result = result.filter(item => item.roomNumber === filters.audience);
    }

    if (filters.discipline) {
      result = result.filter(item => item.discipline === filters.discipline);
    }

    if (filters.group) {
      result = result.filter(item => item.group === filters.group);
    }

    if (filters.date) {
      result = result.filter(item => item.date === filters.date);
    }

     if (filters.showEmpty) {
    result = result.filter(item => 
      item.discipline || item.lastName || item.group
    );
  }

    return result.sort((a, b) => {
      const [dayA, monthA, yearA] = a.date.split('.').map(Number);
      const [dayB, monthB, yearB] = b.date.split('.').map(Number);
      const dateA = new Date(yearA, monthA - 1, dayA);
      const dateB = new Date(yearB, monthB - 1, dayB);
      
      if (dateA - dateB !== 0) {
        return dateA - dateB;
      }
      
      if (a.pair && b.pair) {
        return a.pair - b.pair;
      }
      
      return 0;
    });
  }, [scheduleData, filters]);

  return {
    filters,
    updateFilter,
    filteredData,
    availableDates
  };
};