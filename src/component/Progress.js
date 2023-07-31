import React from "react";
import styled from "styled-components";

const StyledDiv1 = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    flex-shrink: 0;
    `;

const StyledDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `;

const StyledDiv3 = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    color: #000;
    text-align: center;
    font-family: Noto Sans KR;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    `;

const StyledLabelL = styled.label`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--yoda-admin-template-blacks-b-100, #2D3436);
    text-align: center;
    font-family: Noto Sans;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 300;
    line-height: 1.3125rem; /* 210% */
    letter-spacing: 0.01875rem;
    `;

const StyledLabelR = styled.label`
    flex-shrink: 0;
    color: #3E54AC;
    text-align: center;
    font-family: Noto Sans;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    `;

const StyledProgress = styled.progress`
    display: flex;
    flex-direction: row;    
    width: 100%;
    `;


function Progress(){
    return(
        <StyledDiv1>
            <StyledLabelL for="file">
                <div>당월 달성도</div>
                <div>기준 (%)</div>
            </StyledLabelL>
            <StyledDiv2>
                <StyledProgress id="file" min="0" max="100" value="20"></StyledProgress>           
                <StyledDiv3>
                    <div>20%</div>
                    <div>40%</div>
                    <div>60%</div>
                    <div>80%</div>                    
                </StyledDiv3>
            </StyledDiv2>
            <StyledLabelR for="file">100%</StyledLabelR>
        </StyledDiv1>
    )
}

export default Progress;