import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    border-radius: 7px;
    color: #B2BEC3;
    font-family: Noto Sans;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5rem; /* 160% */
    letter-spacing: 0.3px;
    &:hover{
        color: #3E54AC;
    }
    `;

function NavItem(props){
    return(
        <StyledDiv>
            <p>{props.val1}</p>{/* 사이드바 메뉴 아이템 */}
        </StyledDiv>
    )
}

export default NavItem;