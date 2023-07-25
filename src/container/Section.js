import React from "react";
import style from "./Section.module.css";
import Progress from "../component/Progress";
import Month from "../component/Month";
import Title from "../component/Title";
import Year from "../component/Year";
import DTable from "../component/DTable";


function Section(){

    return(
        <div className={style.Section}>

            <div className={style.Top}>
                <div className={style.MonthTitle}>
                    <Month>6월</Month><Title>달성도</Title>    
                </div>
                <div className={style.Progress}>
                    <Progress></Progress>
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