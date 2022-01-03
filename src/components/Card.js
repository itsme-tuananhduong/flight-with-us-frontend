import React, { Fragment, useContext } from 'react';
import { ThemeContext } from '../shared/context/ThemeProvider';

import './Card.css';

function Card({ card, saveID }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { id, cardImage, cardTitle, cartContent } = card;
  const handleID = () => {
    saveID(id);
  };
  return (
    <Fragment>
      <div className={theme === 'dark' ? 'card dark' : 'card'}>
        <img className="card-img-top" src={cardImage} alt="" />
        <div className="card-body">
          <div>
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">{cartContent}</p>
          </div>
          <p className="card-button" onClick={handleID}>
            Chi tiết
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
