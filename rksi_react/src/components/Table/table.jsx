import './table.css';
import Dropdown from '../Select/dropdown';
import Input from '../Input/input'; 

const Table = ({ 
  data,
  columns,
  editingId,
  onEdit,
  onSave,
  onDelete,
  onChange,
  availableOptions = {}
}) => {
  const handleInputChange = (itemId, field, value) => {
    onChange(itemId, field, value);
  };

  return (
    <div className="schedule-container">  
      <div className="schedule-table">
        <table>
          <thead>
            <tr className='schedule-table-thead'>
              {columns.map(column => (
                <th key={column.key}>{column.title}</th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                {columns.map(column => (
                  <td key={column.key}>
                    {editingId === item.id ? (
                      column.type === 'select' ? (
                        <Dropdown
                          value={item[column.key] || ''}
                          onChange={(e) => handleInputChange(item.id, column.key, e.target.value)}
                          options={availableOptions[column.key] || []}
                          placeholder={column.placeholder}
                        />
                      ) : column.type === 'date' ? (
                        <Input
                            type="date"
                          value={item[column.key] || ''}
                          onChange={(e) => handleInputChange(item.id, column.key, e.target.value)} // оставляем как есть
                          />
                      ) : (
                        <Input
                          type="text"
                          value={item[column.key] || ''}
                          onChange={(e) => handleInputChange(item.id, column.key, e.target.value)}
                          placeholder={column.placeholder}
                        />
                      )
                    ) : (
                      item[column.key] || '-'
                    )}
                  </td>
                ))}
                <td className="actions">
                  {editingId === item.id ? (
                    <button onClick={() => onSave(item.id)}>
                      <img src="/images/save.svg" alt="Save" />
                    </button>
                  ) : (
                    <button onClick={() => onEdit(item.id)}>
                      <img src="/images/edit.svg" alt="Edit" />
                    </button>
                  )}
                  <button onClick={() => onDelete(item.id)}>
                    <img src="/images/delete.svg" alt="Delete" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;