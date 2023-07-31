import React from "react";
import styled from "styled-components";


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


function ProgressL(){
    return(
        <StyledLabelL>
            <div>당월 달성도</div>
            <div>기준 (%)</div>
        </StyledLabelL>
    )
}

export default ProgressL;