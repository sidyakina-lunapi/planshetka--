import './cards.css';

const CardPair = ({ 
  firstCard, 
  secondCard,
  orientation = "horizontal"
}) => {
  return (
    <div className={`card-pair ${orientation}`}>
      <div className="card-pair__card">
        {firstCard}
      </div>
      <div className="card-pair__arrow">
        <svg width="27" height="35" viewBox="0 0 27 35" fill="none" className='card-pair_icon' xmlns="http://www.w3.org/2000/svg">
          <path d="M15.521 31.5001L25.3005 18.2977C25.4315 18.1209 25.4315 17.8793 25.3005 17.7025L15.521 4.50012" stroke="#BFD1FF" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M2.521 1.50012L14.4183 17.1932C14.5552 17.3737 14.5552 17.6265 14.4183 17.8071L2.521 33.5001" stroke="#7A90C9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <div className="card-pair__card">
        {secondCard}
      </div>
    </div>
  );
};

export default CardPair;