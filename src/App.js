import React, { useState } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // озгоруп туруучу переменный ошондуктан usestate колдондук

  const loginHandler = (email, password) => {
    setIsLoggedIn(true);  // isloggedin ге true маанисин сактап коет
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);  // isloggedin ге false маанисин сактап коет
  };

  return (
    <React.Fragment /*бул реакт фрагмент домго барганда жоголуп кетет жана ичиндеги контент гана калат*/> 
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} /* isloggedin false болсо login деген окошка чыгат*/ />}
        {isLoggedIn && <Home onLogout={logoutHandler} /* isloggedin true болсо user log in  кылган болсо ушул компонент пайда болот*/ />}
      </main>
    </React.Fragment>
  );
}

export default App;
