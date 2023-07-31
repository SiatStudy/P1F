import React from "react";
import style from "./SideMenu.module.css";
import CustomMainPageP from "../component/CustomMainPageP";
import CustomMainPageImg from "../component/CustomMainPageImg";


function SideMenu(){

    return(
        <div className={style.SideNavBar}>
            <div className={style.NavTop}>
                <div className={style.Logo}>
                    <img src={ "/asset/img/LogoIcon.svg" }/>
                </div>
                <div className={style.NavMain}>
                    <div className={style.NavMenu}>
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
                </div>
            </div>

        </div>
    )
}

export default SideMenu;