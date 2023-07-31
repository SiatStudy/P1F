import React from "react";
import style from "./Section.module.css";
import Month from "../component/Month";
import Title from "../component/Title";
import Year from "../component/Year";
import DTable from "../component/DTable";
import ProgressL from "../component/ProgressL";
import ProgressR from "../component/ProgressR";
import ProgressBar from "../component/ProgressBar";
import ProgressUnder from "../component/ProgressUnder";


function Section(){

    return(
        <div className={style.Section}>

            <div className={style.Top}>
                <div className={style.MonthTitle}>
                    <Month>6월</Month><Title>달성도</Title>    
                </div>
                <div className={style.Progress}>
                    <ProgressL></ProgressL>
                    <div className={style.ProgressBar}>
                        <ProgressBar></ProgressBar>
                        <ProgressUnder></ProgressUnder>
                    </div>
                    <ProgressR></ProgressR>
                </div>
            </div>

            <div className={style.Bottom}>
                <div className={style.MonthYear}>
                    <Month>6월</Month><Year>2023</Year>    
                </div>
                <div className={style.Table}>
                    <DTable></DTable>
                </div>
            </div>

        </div>
    )
}

export default Section;