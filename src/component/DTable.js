import React from "react";
import styled from "styled-components";
// useeffect 사용

const StyledDiv = styled.div`
    `;

const StyledTr = styled.tr`
    display: flex;
    flex-direction: row;
    width: 100%;
    `;

const StyledTd = styled.td`
    display: flex;
    width: 20rem;
    padding: 0.5rem 1rem;
    align-items: center;
    gap: 0.625rem;
    background-color: white;
    color: var(--yoda-admin-template-blacks-b-100, #2D3436);
    text-align: center;
    font-family: Noto Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 200;
    line-height: 1.3125rem; /* 131.25% */
    letter-spacing: 0.03rem;
    `;

function DTable(){

    const array1 = [
        {text1:'2023년 6월 2일', text2:'페이지 작업1', text3:'D-2'},
        {text1:'2023년 6월 7일', text2:'페이지 작업2', text3:'D-4'},
        {text1:'2023년 6월 8일', text2:'페이지 작업3', text3:'D-5'},
        {text1:'2023년 6월 18일', text2:'페이지 작업4', text3:'D-8'},
        {text1:'2023년 6월 28일', text2:'페이지 작업5', text3:'D-10'}
    ]
    
    return(
        <StyledDiv>
            <table>
                {array1.map(i => (<StyledTr>
                                    <StyledTd>{i.text1}</StyledTd>
                                    <StyledTd>{i.text2}</StyledTd>
                                    <StyledTd>{i.text3}</StyledTd>
                                </StyledTr>))}
            </table>
        </StyledDiv>
    )
}

export default DTable;



            /*
                function trFunc(arr){
                    let str = "";
                    for (const arrItem of arr) {
                        str += (<tr><td>arrItem['text1']</td><td>arrItem['text2']</td><td>arrItem['text3']</td></tr>)
                    }
                    return str;
                }
                */