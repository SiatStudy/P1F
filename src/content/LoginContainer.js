import React from 'react';
import style from './LoginContainer.module.css';
import { useState } from "react";
import PasswordInput from '../component/PasswordInput';
import InputNote from '../component/InputNote';
import VarInput from '../component/VarInput';

const LoginContainer = () => {
  // 로그인 화면 컨테이너

  const [vals, setVals] = useState({
    id: '',
    password: ''
  });

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setVals((prevInputs) => ({
      ...prevInputs,
      [name]: value
    }));
    console.log(value);
  };

  return (
    <div className={style.container}>
      <div className={style.inputDiv}>
        <VarInput type="text" label="id" name="input1" onChange={onInputChange} value={vals.input1}></VarInput>
        <div className={style.passwordDiv}>
          <PasswordInput label="password" name="password" onChange={onInputChange}
            value={vals.password}></PasswordInput>
          <InputNote>아이디 또는 비밀번호를 확인해주세요</InputNote>
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;