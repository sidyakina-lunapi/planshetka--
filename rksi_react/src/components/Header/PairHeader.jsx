import './header.css';

const PairHeader = ({ pairNumber }) => {
  const pairTimes = {
    1: '8:00',
    2: '9:40', 
    3: '11:30',
    4: '13:10',
    5: '15:00',
    6: '16:40',
    7: '18:20'
  };

  return (
    <div className="pair-header">
      <div className="pair-number">{pairNumber} пара</div>
      <div className="pair-time">{pairTimes[pairNumber]}</div>
    </div>
  );
};

export default PairHeader;