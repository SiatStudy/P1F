import React from "react";
import style from "./DdayTable.module.css";
import CustomMainPageDiv from "../component/CustomMainPageDiv";
import CustomMainPageP from "../component/CustomMainPageP";


function DdayTable(props){

    const array1 = [
        {text1:'2023년 6월 2일', text2:'페이지 작업1', text3:'D-2'},
        {text1:'2023년 6월 7일', text2:'페이지 작업2', text3:'D-4'},
        {text1:'2023년 6월 8일', text2:'페이지 작업3', text3:'D-5'},
        {text1:'2023년 6월 18일', text2:'페이지 작업4', text3:'D-8'},
        {text1:'2023년 6월 28일', text2:'페이지 작업5', text3:'D-10'},
        {text1:'2023년 6월 28일', text2:'페이지 작업6', text3:'D-11'},
        {text1:'2023년 6월 28일', text2:'페이지 작업7', text3:'D-18'}
    ]

    return(
        <div className={style.DdayTable}>
            <div className={style.MonthYear}>
                <CustomMainPageDiv $month>{props.month}</CustomMainPageDiv>
                <CustomMainPageDiv $year>{props.year}</CustomMainPageDiv>    
            </div>
            <div className={style.Table}>
                <div className={style.TableHeader}>
                    <CustomMainPageP $tableheader>작성 날짜</CustomMainPageP>
                    <CustomMainPageP $tableheader> 작업명</CustomMainPageP>
                    <CustomMainPageP $tableheader>D-DAY</CustomMainPageP>
                </div>
                <div className={style.TableMain}>
                    {array1.map(i => ( <div className={style.TableInner}>
                        <CustomMainPageDiv $t1>{i.text1}</CustomMainPageDiv>
                        <CustomMainPageDiv $t1>{i.text2}</CustomMainPageDiv>
                        <CustomMainPageDiv $t2>{i.text3}</CustomMainPageDiv>
                                </div>))}
                </div>
            </div>
        </div>
    )
}

export default DdayTable;