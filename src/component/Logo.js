import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    width: 144px;
    height: 62px;
    align-items: center;
    padding-top: 4rem;
`;

function Logo(){
    return(
        <StyledDiv>
            <img src={ '/asset/img/LogoIcon.svg' }/>
        </StyledDiv>
    );
}

export default Logo;