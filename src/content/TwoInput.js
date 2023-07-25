import React, { useState } from 'react';
import style from './TwoInput.module.css';
import VarInput from '../component/VarInput';

const TwoInput = ({ input1, input2 }) => {

  //prop로 받은 input.value에 state 주기
    const [vals, setVals] = useState({
      [input1.name]: '',
      [input2.name]: ''
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
      <VarInput
        type={input1.type}
        name={input1.name}
        label={input1.label}
        size='600'
        onChange={onInputChange}
        value={vals[input1.name]}
      />
      <VarInput
        type={input2.type}
        name={input2.name}
        label={input2.label}
        size='600'
        onChange={onInputChange}
        value={vals[input2.name]}
      />
    </div>
  );
};

export default TwoInput;