import React from "react";
import NavItem from "../component/NavItem";
import NavFooter from "../component/NavFooter";
import Logo from "../component/Logo";
import style from "./Nav.module.css";
import NavBotPic from "../component/NavBotPic";


function Nav(){

    return(
        <div className={style.SideNavBar}>
            <div className={style.Logo}>
                <Logo></Logo>
            </div>
            <div className={style.NavMain}>
                <div className={style.NavItems}>
                    <NavItem val1="List Day"></NavItem>
                    <NavItem val1="Calendar"></NavItem>
                    <NavItem val1="목표 달성 D-day"></NavItem>
                    <NavItem val1="그래프로 한 눈에 보기"></NavItem>
                </div>
                <div className={style.NavBotPic}>
                    <NavBotPic></NavBotPic>
                </div>
            </div>
            <div className={style.NavFooter}>
                <NavFooter val1="김현우"></NavFooter>
            </div>
        </div>
    )
}

export default Nav;