import React from "react";
import styled from "styled-components";

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


function ProgressR(){
    return(
        <StyledLabelR>100%</StyledLabelR>
    )
}

export default ProgressR;