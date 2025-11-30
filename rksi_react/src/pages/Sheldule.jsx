import { useState } from 'react';
import ButtonNav, { DawIcon, StarIcon, FilterIcon, PensilIcon } from "../components/Buttons/buttonNav"; 
import '../styles/pages.css';
import ShelduleCard from '../components/Cards/ShelduleCard';
import { useDisplayFields } from '../hooks/useDisplayFields';
import { scheduleData } from '../data/scheduleData';
import FilterText from '../components/dropdownElements/FilterText';
import DateFilter from '../components/dropdownElements/DateFilter';
import CheckboxDropdownContent from '../components/dropdownElements/CheckboxDropdownContent';
import { useScheduleFilters } from '../hooks/useScheduleFilters';
import { commonOptions, teacherOptions, disciplineOptions, groupOptions, eventOptions } from '../data/commonData';
import DateHeader from '../components/Header/DateHeader';
import PairHeader from '../components/Header/PairHeader';

export default function Shedule() {
  const { filters, updateFilter, filteredData, availableDates } = useScheduleFilters(scheduleData);
  const { visibleFields, updateVisibleFields } = useDisplayFields();

  const groupedByDate = filteredData.reduce((acc, item) => {
    const date = item.date;
    
    if (!acc[date]) {
      acc[date] = {};
    }
    
    if (!acc[date][item.pair]) {
      acc[date][item.pair] = [];
    }
    
    acc[date][item.pair].push(item);
    return acc;
  }, {});

  const sortedDates = Object.keys(groupedByDate).sort((a, b) => {
    const [dayA, monthA, yearA] = a.split('.').map(Number);
    const [dayB, monthB, yearB] = b.split('.').map(Number);
    const dateA = new Date(yearA, monthA - 1, dayA);
    const dateB = new Date(yearB, monthB - 1, dayB);
    return dateA - dateB;
  });

  const TeachersList = () => (
    <div className="teachers-list">
      {teacherOptions.map((teacher, index) => (
        <div
          key={index}
          className="teacher-option"
          onClick={() => updateFilter('teacher', teacher)}
        >
          {teacher}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <nav className="pages_nav">
        <ButtonNav 
          text="Фильтры"
          icon={FilterIcon}
          checkbox={DawIcon}
          dropdownContent={
            <div className="filters-dropdown">
              <FilterText 
                text="Места" 
                options={commonOptions.buildings.map(b => `Корпус ${b}`)}
                placeholderText="место"
                value={filters.building}
                onChange={(e) => updateFilter('building', e.target.value)}
              />
              <FilterText 
                text="Преподаватели" 
                options={teacherOptions}
                placeholderText="преподавателя"
                value={filters.teacher}
                onChange={(e) => updateFilter('teacher', e.target.value)}
              />
              <FilterText 
                text="Аудитории" 
                options={commonOptions.audiences}
                placeholderText="аудиторию"
                value={filters.audience}
                onChange={(e) => updateFilter('audience', e.target.value)}
              />
              <FilterText 
                text="Дисциплины" 
                options={disciplineOptions}
                placeholderText="дисциплину"
                value={filters.discipline}
                onChange={(e) => updateFilter('discipline', e.target.value)}
              />
              <FilterText 
                text="Группа" 
                options={groupOptions}
                placeholderText="группу"
                value={filters.group}
                onChange={(e) => updateFilter('group', e.target.value)}
              />
              <FilterText 
                text="Мероприятия" 
                options={eventOptions}
                placeholderText="мероприятие"
                value={filters.event}
                onChange={(e) => updateFilter('event', e.target.value)}
              />
              <FilterText 
                text="Даты" 
                customContent={
                  <DateFilter 
                    value={filters.date}
                    onChange={(value) => updateFilter('date', value)}
                  />
                }
              />
            </div>
          }
        />
        <ButtonNav 
          text="Отображение"
          icon={PensilIcon}
          checkbox={DawIcon}
          dropdownContent={
            <CheckboxDropdownContent 
              options={['Место', 'Аудитория', 'Дисциплина', 'Группа', 'Преподаватель', 'Мероприятие']}
               onSelectionChange={updateVisibleFields}
            />
          }
        />
        <ButtonNav 
          text="Пустые аудитории"
          hasCheckbox={true}
          isChecked={!filters.showEmpty}
          onCheckboxChange={(checked) => updateFilter('showEmpty', !checked)}
        />
        <ButtonNav 
          text="Преподаватели"
          icon={StarIcon}
          checkbox={DawIcon}
          dropdownContent={<TeachersList />}
        />
      </nav>
      
        <div className="schedule-page-container">
        {sortedDates.map(date => (
          <div key={date} className="date-block">
            <DateHeader date={date} />
            
            {Object.keys(groupedByDate[date])
              .sort((a, b) => parseInt(a) - parseInt(b))
              .map(pairNumber => (
                <div key={`${date}-${pairNumber}`} className="pair-block">
                  <PairHeader pairNumber={parseInt(pairNumber)} />
                  
                  <div className="sheldule-cards-container">
                    {groupedByDate[date][pairNumber].map((item, index) => (
                      <ShelduleCard
                        key={`${date}-${pairNumber}-${index}`}
                        building={item.building}
                        roomNumber={item.roomNumber}
                        discipline={item.discipline}
                        lastName={item.lastName}
                        group={item.group}
                        date={item.date}
                        pair={item.pair}
                        reason={item.reason} 
                        visibleFields={visibleFields} 
                      />
                    ))}
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
}