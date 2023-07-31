import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
padding: 0.5rem;
    color: #3E54AC;
    font-family: Noto Sans;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1rem; /* 53.333% */
`;

function Title({children}){
    return(
        <StyledDiv>
            {children}
        </StyledDiv>
    )
}

export default Title;