import React, { Fragment } from 'react';

import './Card.css';

function Card({ card, saveID }) {
  const { id, cardImage, cardTitle, cartContent } = card;
  const handleID = () => {
    saveID(id);
  };
  return (
    <Fragment>
      <div className="card">
        <img className="card-img-top" src={cardImage} alt="" />
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cartContent}</p>
          <p className="card-button" onClick={handleID}>
            chi tiết
          </p>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
