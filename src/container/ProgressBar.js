import React, {useState} from "react";
import style from "./ProgressBar.module.css";
import CustomMainPageProgress from "../component/CustomMainPageProgress";
import CustomMainPageDiv from "../component/CustomMainPageDiv";
import CustomMainPageLabel from "../component/CustomMainPageLabel";
import CustomMainPageP from "../component/CustomMainPageP";


function ProgressBar(props){

    const [progress, setProgress] = useState(0);

    const onChange = () => {
        setProgress(progress);
    }

    return(
        <div className={style.ProgressBar}>
            <div className={style.MonthTitle}>
                <CustomMainPageDiv $month>{props.month}</CustomMainPageDiv>
                <CustomMainPageP $title>달성도</CustomMainPageP>    
            </div>
            <div className={style.Progress}>
                <div className={style.ProgressL}>
                    <CustomMainPageLabel $progressl>당월 달성도</CustomMainPageLabel>
                    <CustomMainPageLabel $progressl>기준 (%)</CustomMainPageLabel>
                </div>
                <div className={style.ProgressBar}>
                    <CustomMainPageProgress onChange={onChange} $progressbar min="0" max="100" value={props.progress}></CustomMainPageProgress>
                    <div className={style.ProgressUnder}>
                    <CustomMainPageLabel $progressunder>20%</CustomMainPageLabel>
                    <CustomMainPageLabel $progressunder>40%</CustomMainPageLabel>
                    <CustomMainPageLabel $progressunder>60%</CustomMainPageLabel>
                    <CustomMainPageLabel $progressunder>80%</CustomMainPageLabel>
                    </div>
                </div>
                <CustomMainPageLabel $progressr>100%</CustomMainPageLabel>
            </div>
        </div>
    )
}

export default ProgressBar;