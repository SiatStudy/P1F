import React, { Children } from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
padding: 0.5rem;
display: flex;
justify-content: center;
flex-shrink: 0;
color: #8DCBE6;
text-align: center;
font-family: Noto Sans;
font-size: 1.875rem;
font-style: normal;
font-weight: 700;
line-height: 1rem; /* 53.333% */
`;

function Month({children}){
    return(
        <StyledLabel>
            {children}
        </StyledLabel>
    );
}

export default Month;