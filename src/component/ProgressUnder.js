import React from "react";
import styled from "styled-components";

const StyledDiv1 = styled.div`
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


function ProgressUnder(){
    return(
        <StyledDiv1>
            <div>20%</div>
            <div>40%</div>
            <div>60%</div>
            <div>80%</div>
        </StyledDiv1>
    )
}

export default ProgressUnder;