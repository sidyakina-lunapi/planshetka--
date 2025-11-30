import { useState } from 'react';

export const useTable = (initialData = []) => {
  const [data, setData] = useState(initialData);
  const [editingId, setEditingId] = useState(null);

  const addItem = (newItem) => {
    const newItemWithId = {
      ...newItem,
      id: Date.now()
    };
    setData(prev => [newItemWithId, ...prev]);
    setEditingId(newItemWithId.id);
  };

  const deleteItem = (itemId) => {
    setData(prev => prev.filter(item => item.id !== itemId));
  };

  const editItem = (itemId) => {
    setEditingId(itemId);
  };

  const saveItem = (itemId) => {
    setEditingId(null);
  };

  const changeItem = (itemId, field, value) => {
    setData(prev => prev.map(item => 
      item.id === itemId ? { ...item, [field]: value } : item
    ));
  };

  const updateData = (newData) => {
    setData(newData);
  };

  return {
    data,
    editingId,
    addItem,
    deleteItem,
    editItem,
    saveItem,
    changeItem,
    updateData,
    setEditingId
  };
};