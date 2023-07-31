import React, { Children } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
padding: 0.5rem;
color: #3E54AC;
font-family: Noto Sans;
font-size: 1.875rem;
font-style: normal;
font-weight: 700;
line-height: 1rem; /* 53.333% */
`;

function Year({children}){
    return(
        <StyledLabel>
            {children}
        </StyledLabel>
    );
}

export default Year;