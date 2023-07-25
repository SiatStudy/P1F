import React from 'react';
import style from './LoginPage.module.css';
import LoginContainer from '../content/LoginContainer';

const LoginPage = () => {
  return (
    <div className={style.loginPage}>
      <LoginContainer></LoginContainer>
    </div>
  );
};

export default LoginPage;