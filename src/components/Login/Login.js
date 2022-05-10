import React, { useState, useEffect } from 'react';
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

//debouncing, debounce

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); // жазылган email сакталат   
  const [emailIsValid, setEmailIsValid] = useState(); // email  туура же туура эмес жазылганын текшерет 
  const [enteredPassword, setEnteredPassword] = useState(''); // жазылган пароль сакталат
  const [passwordIsValid, setPasswordIsValid] = useState(); // пароль туура же туура эмес экени текшерилет
  const [formIsValid, setFormIsValid] = useState(false); // общий форма т.е email жана парольду кошо текшерет

  useEffect(() => {  //useEffect бизге side effect тер менен иштоого мумкунчулук берет, мисалы fetch запрос, таймерлер менен.
    // ал эки аргумент алат: функция жана dependencies.
    // кандай иштейт 1) useEffect(() => {ар рендер болгон сайын иштейт, себеби эч кандай зависимости жок})
    // 2) useEffect(() => { башындале бир жолу иштейт}, []);
    // 3) useEffect(() => { башында бир жолу иштейт жана dependencyнин мааниси алмашкан сайын иштейт}, [dependency]);
    const timer = setTimeout(() => {
      setFormIsValid(enteredEmail.includes('@') && enteredPassword.trim().length > 6);
      console.log('changed');
    }, 3000);

    // бул жерде биз ар тамганы жазган сайын эмес биз жазып буткондон кийин 3 секундтан кийин текшерет 
    //себеби ар бир жазган символдон кийин 3 секунда кутот эгерде эч нерсе жазбасак анда проверка журот а жазууну улантсак анда ар бир символдон кийин setTimeout жаныланып турат  

    return () => {
      clearTimeout(timer)  
    };
  }, [enteredEmail, enteredPassword]);  //dependencies, useEffect тин иштоосу бул эки переменныйдан коз каранды, булар озгоргон сайын useEffect иштеп турат

  const emailChangeHandler = (event) => {  // бул функция email дин занчениясын алып берет
    setEnteredEmail(event.target.value);  // бул жерде email дин значениясы enteredEmail ге сакталып жатат
  };

  const passwordChangeHandler = (event) => { // бул функция password дун занчениясын алып берет
    setEnteredPassword(event.target.value); // бул жерде password дун значениясы enteredPassword ко сакталып жатат
  };

  const validateEmailHandler = () => {  // бул функция email ди текшерет
    setEmailIsValid(enteredEmail.includes('@')); // эгер email де @ символу бар болсо true жок болсо false деген маанилер emailIsValid ке барып сакталат
  };

  const validatePasswordHandler = () => {  // бул функция password ту текшерет
    setPasswordIsValid(enteredPassword.trim().length > 6); // эгер пароль 6 символдон коп болсо true аз болсо false маанилери passwordIsValid ке барып сакталат
  };

  const submitHandler = (event) => { // кнопка басылганда ушул функция иштейт
    event.preventDefault(); // форманы серверге жонотуп ийбеш учун колдонулат
    props.onLogin(enteredEmail, enteredPassword);  // lifting up
  };
  
  return (
    <Card className={classes.login} /*Форманы card менен ороп алдык */>  
      <form onSubmit={submitHandler} /*form submit болгондо submitHandler иштейт */> 
        <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`} /*бул жерде проверка коюлган эгерде email false болсо .invalid ке жазылган стиль иштейт, интерполяция колдонулган себеби ичинде javascript код жазылган*/>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}  /* value бергенбиз себеби инпутка жазуу жазып аны submit  кылгандан кийин тазалап туруш учун*/
            onChange={emailChangeHandler} /*onchange аркылуу жазылган данныйларды алабыз */
            onBlur={validateEmailHandler} /*качан инпуттан фокус алынганда бул функция иштейт, кобунчо onblur input проверкаларда колдонулат.  */
          />
        </div>
        <div className={`${classes.control} ${passwordIsValid === false ? classes.invalid : ''}`} /*бул жерде проверка коюлган эгерде password false болсо .invalid ке жазылган стиль иштейт */>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler} /*onchange аркылуу жазылган данныйларды алабыз */
            onBlur={validatePasswordHandler} /*качан инпуттан фокус алынганда бул функция иштейт */
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid} /*Button компоненти аркылуу кнопка тузуп алганбыз, disabled аттрибуту кнопканы lock жана unlock кылып коет true же false болсо*/> 
            Login 
          </Button>
        </div>
      </form>
    </Card>
  );
};
export default Login;
