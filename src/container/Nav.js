import React from "react";
import NavFooter from "../component/NavFooter";
import style from "./Nav.module.css";
import NavBotPic from "../component/NavBotPic";
import CustomMainPageP from "../component/CustomMainPageP";
import CustomMainPageImg from "../component/CustomMainPageImg";


function Nav(props){

    return(
        <div className={style.SideNavBar}>
            <div className={style.Logo}>
                <img src={ "/asset/img/LogoIcon.svg" }/>
            </div>
            <div className={style.NavMain}>
                <div className={style.NavItems}>
                    <div className={style.NavItem}>
                        <CustomMainPageImg src={ '/asset/img/MailIcon.svg' }></CustomMainPageImg>
                        <CustomMainPageP $navmenup>List Day</CustomMainPageP>
                    </div>
                    <div className={style.NavItem}>
                        <CustomMainPageImg src={ '/asset/img/MailIcon.svg' }></CustomMainPageImg>
                        <CustomMainPageP $navmenup>Calendar</CustomMainPageP>
                    </div>
                    <div className={style.NavItem}>
                        <CustomMainPageImg src={ '/asset/img/MailIcon.svg' }></CustomMainPageImg>
                        <CustomMainPageP $navmenup>목표 달성 D-day</CustomMainPageP>
                    </div>
                    <div className={style.NavItem}>
                        <CustomMainPageImg src={ '/asset/img/MailIcon.svg' }></CustomMainPageImg>
                        <CustomMainPageP $navmenup>그래프로 한 눈에 보기</CustomMainPageP>
                    </div>
                </div>
                <div className={style.NavBotPic}>
                    <CustomMainPageImg $navbotpic src={'/asset/img/NavBotPic.svg'}></CustomMainPageImg>
                </div>
            </div>
            <div className={style.NavFooter}>
                <NavFooter val1="김현우"></NavFooter>
            </div>
        </div>
    )
}

export default Nav;