import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
position: relative;
display: flex;
width: 18.3125rem;
align-items: center;
border-radius: 0.4375rem;
border: 1px solid #DFE6E9;
justify-content: space-between;
`;

const StyledInput = styled.input`
width: 100%;
border: 1px solid #bbb;
border-radius: 8px;
padding: 10px 10px;
font-size: 14px;
&:after {
    content: url( "/asset/img/SearchIcon.svg" );
}
`;

// const StyledImg = styled.img`
// position : absolute;
// width: 16px;
// top: 10px;
// right: 10px;
// margin: 0;
// `;

function HeaderSearch(){

    return(
        <StyledDiv>
                <StyledInput type="text" placeholder="검색" />
                {/* <StyledImg src={ '/asset/img/SearchIcon.svg' } />           */}
        </StyledDiv>
    )
}

export default HeaderSearch;