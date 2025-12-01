// context/ReplacementContext.jsx
import { createContext, useContext, useState } from 'react';

const ReplacementContext = createContext();

export const useReplacement = () => {
  const context = useContext(ReplacementContext);
  console.log('useReplacement called, context:', context);
  if (!context) {
    console.error('useReplacement must be used within ReplacementProvider');
    throw new Error('useReplacement must be used within ReplacementProvider');
  }
  return context;
};

export const ReplacementProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    scheduleData: null
  });

  console.log('ReplacementProvider render, modalState:', modalState);

  const openReplacementModal = (scheduleData) => {
    console.log('🟢 OPENING MODAL with data:', scheduleData);
    setModalState({
      isOpen: true,
      scheduleData
    });
  };

  const closeReplacementModal = () => {
    console.log('🔴 CLOSING MODAL');
    setModalState({
      isOpen: false,
      scheduleData: null
    });
  };

  const value = {
    isOpen: modalState.isOpen,
    scheduleData: modalState.scheduleData,
    openReplacementModal,
    closeReplacementModal
  };

  return (
    <ReplacementContext.Provider value={value}>
      {children}
    </ReplacementContext.Provider>
  );
};