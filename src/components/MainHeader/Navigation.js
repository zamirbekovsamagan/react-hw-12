import React from 'react';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {props.isLoggedIn && ( // isLoggedIn true болсо li экранга чыгат
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {props.isLoggedIn && ( //isLoggedIn true болсо li экранга чыгат
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {props.isLoggedIn && (  //isLoggedIn true болсо li экранга чыгат
          <li>
            <button onClick={props.onLogout} /* кнопкага басылганда onLogout иштейт жана главная страницага чыгып кетет */>Logout</button>  
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
