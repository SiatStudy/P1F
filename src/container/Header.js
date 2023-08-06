import React, { useState } from "react";
import style from "./Header.module.css";
import CustomMainPageInput from "../component/CustomMainPageInput";
import CustomMainPageImg from "../component/CustomMainPageImg";
import CustomMainPageP from "../component/CustomMainPageP";
import { Navigate, useNavigate } from "react-router-dom";
import {isString} from '../util/validation/isString';
import { useSelector, useDispatch } from "react-redux";
import { setSearchData } from "../store/searchData";

function Header(props){

    // useSelector를 통해 리듀서에 저장된 데이터에 접근이 가능해짐
    const state = useSelector(state => state);
    // dispatch와 actionCreater 함수를 조합해서 action을 생성한다.
    const dispatch = useDispatch();

    const [val, setVal] = useState("");
    const navigate = useNavigate();

    const onInputChange = (e) => {
        const { value } = e.target;
        setVal(value);
    };

    const onBtnClick = ()=>{
        if(isString(val)){
            dispatch(setSearchData(val));
            navigate("/search");
        }
    }
    
    return(
        <div className={style.Header}>
            <div className={style.Title}>
                <CustomMainPageP $title>{props.title}</CustomMainPageP>
            </div>
            <div className={style.Search}>
                <CustomMainPageInput $headerinput type="text" onChange={onInputChange} 
                value={val} placeholder="검색"></CustomMainPageInput>
                <CustomMainPageImg $headerinputicon src={ '/asset/img/SearchIcon.svg' } onClick={onBtnClick}></CustomMainPageImg>
            </div>
        </div>
    )
}

export default Header;