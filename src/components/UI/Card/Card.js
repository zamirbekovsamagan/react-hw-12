import React from 'react';
import classes from './Card.module.css';

const Card = (props) => {  // Универсалбный Card деген компонент ачып алганбыз, версткабыздын каалаган жерин ушул компонент менен ороп койсок болот 
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>  // children деген props алат жана озунун туруктуу стили бар плюс кошумча стилдерди да кабыл алат
  );
};

export default Card;
