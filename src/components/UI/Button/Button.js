import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {  // Универсалбный button компонент ачып алганбыз, чтобы кайра кайра колдонгону
  return (
    <button
      type={props.type || 'button'}  // type propsтан келет, эгер ал жактан келбесе type='button' болуп калсын дер койдук 
      className={`${classes.button} ${props.className}`}  // className да propsтан келет жана озунун да button деген классы бар, негизи .button га берилген дизайн универсальный бирок кошумча дизайн да берип койсо болот  
      onClick={props.onClick}  
      disabled={props.disabled} // login.js те проверка жазылган качан форм туура болгондо гана кнопка иштейт
    >
      {props.children} 
    </button> 
  );
};

export default Button;
