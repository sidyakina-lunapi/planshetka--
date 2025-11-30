import React, { useState } from 'react';
import ButtonNav, { DawIcon, StarIcon, RoundIcon, FilterIcon, SearchIcon } from "../components/Buttons/buttonNav"; 
import ReplacementButton from '../components/Buttons/ReplacementButton';
import EmptinessCard from '../components/Cards/EmptinessCard';
import ReplacementCard from '../components/Cards/ReplacementCard';
import CardPair from '../components/Cards/CardPair';
import FilterText from '../components/dropdownElements/FilterText';
import DateFilter from '../components/dropdownElements/DateFilter';
import '../styles/pages.css';

const Replacement = () => {
  const [pairs, setPairs] = useState([]);

  const handlePairCreated = (newPair) => {
    setPairs(prev => [...prev, newPair]);
  };

  const pairChunks = [];
  for (let i = 0; i < pairs.length; i += 2) {
    pairChunks.push(pairs.slice(i, i + 2));
  }

  return (
    <div className="replacement-page">
      <div className="create-replacement-section">
        <ReplacementButton onPairCreated={handlePairCreated}/>
      </div>

      <nav className="pages_nav">
        <ButtonNav 
          text="Фильтры"
          icon={FilterIcon}
          checkbox={DawIcon}
          dropdownContent={
            <div className="filters-dropdown">
              <FilterText 
                text="Места" 
                placeholderText="место"
              />
              <FilterText 
                text="Преподаватели" 
                placeholderText="преподавателя"
              />
              <FilterText 
                text="Аудитории" 
                placeholderText="аудиторию"
              />
              <FilterText 
                text="группы" 
                placeholderText="группу"
              />
              <FilterText 
                text="Дисциплины" 
                placeholderText="дисциплину"
              />
              <FilterText 
                text="Мероприятия" 
                placeholderText="мероприятие"
              />
              <FilterText 
                text="Даты" 
                customContent={
                  <DateFilter 
                  />
                }
              />
              <FilterText 
                text="Пары" 
                placeholderText="пары"
              />
            </div>
          }
        />
        <ButtonNav
          text="Принятые замены" 
          className="buttonNav pages_nav_item"
          icon={RoundIcon}
        />
        <ButtonNav
          text="Нужный фильтр" 
          checkbox={DawIcon}
          className="buttonNav pages_nav_item"
          icon={StarIcon}
        />
        <ButtonNav
          text="Нужный фильтр" 
          checkbox={DawIcon}
          className="buttonNav pages_nav_item"
          icon={StarIcon}
        />
      </nav>

      <div className="replacements-box">
        {pairChunks.length > 0 ? (
          pairChunks.map((chunk, chunkIndex) => (
            <div key={chunkIndex} className="pairs-row">
              {chunk.map((pair) => (
                <div key={pair.id} className="pair-item">
                  <CardPair
                    firstCard={<EmptinessCard />}
                    secondCard={<ReplacementCard {...pair.secondCardData} />}
                  />
                </div>
              ))}
              {chunk.length < 2 && <div className="pair-item empty"></div>}
            </div>
          ))
        ) : (
          <div className="no-pairs-message">
          </div>
        )}
      </div>
    </div>
  );
};

export default Replacement;