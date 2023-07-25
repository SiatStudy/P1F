import React from "react";
import Title from "../component/Title";
import HeaderSearch from "../component/HeaderSearch";
import style from "./Header.module.css";


function Header({children}){

    return(
        <div className={style.Header}>
            <div className={style.Title}>
                <Title>{children}</Title>
            </div>
            <div className={style.Search}>
                <HeaderSearch></HeaderSearch>
            </div>
        </div>
    )
}

export default Header;