// 페이지 헤더
import React from "react";
import style from "./Header.module.css";
import CustomMainPageInput from "../component/CustomMainPageInput";
import CustomMainPageImg from "../component/CustomMainPageImg";
import CustomMainPageP from "../component/CustomMainPageP";
import { Navigate, useNavigate } from "react-router-dom";


function Header(props){

    const navigate = useNavigate();
    return(
        <div className={style.Header}>
            <div className={style.$title}>
                <CustomMainPageP $title>{props.$titleh}</CustomMainPageP>
            </div>
            <div className={style.Search}>
                <CustomMainPageInput $headerinput type="text" placeholder="검색"></CustomMainPageInput>
                <CustomMainPageImg $headerinputicon src={ '/src/asset/img/SearchIcon.svg' }></CustomMainPageImg>
            </div>
        </div>
    )
}

export default Header;