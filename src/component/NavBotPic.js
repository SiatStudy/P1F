import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 14.25rem;
    height: 16.3125rem;
`;

function NavBotPic(){
    return(
        <StyledDiv>
            <img src={ '/asset/img/NavBotPic.svg' }/>
        </StyledDiv>
    );
}

export default NavBotPic;