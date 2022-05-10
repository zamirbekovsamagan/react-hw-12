import React from 'react';

import Navigation from './Navigation';
import classes from './MainHeader.module.css';

const MainHeader = (props) => {  // header компонентин тузуп алганбыз, props алат
  return (
    <header className={classes['main-header']}>
      <h1>A Typical Page</h1> 
      <Navigation isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} /* nav bar */ />
    </header>
  );
};

export default MainHeader;
