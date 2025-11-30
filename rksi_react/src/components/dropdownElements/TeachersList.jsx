import { teacherOptions } from '../../data/commonData';
import './dropdownElements.css';

const TeachersList = () => {
  const handleTeacherSelect = (teacher) => {
    console.log('Выбран преподаватель:', teacher);
  };

  return (
    <div className="teachers-list">
      {teacherOptions.map((teacher, index) => (
        <div
          key={index}
          className="teacher-option"
          onClick={() => handleTeacherSelect(teacher)}
        >
          {teacher}
        </div>
      ))}
    </div>
  );
};

export default TeachersList;