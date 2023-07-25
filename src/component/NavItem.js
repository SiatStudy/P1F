import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    width: 250px;
    padding: 12px 24px;
    align-items: center;
    gap: 8px;
    border-radius: 7px;
    color: #B2BEC3;
    font-family: Noto Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 160% */
    letter-spacing: 0.3px;
    &:hover{
        color: #3E54AC;
    }
    `;

function NavItem(props){
    return(
        <StyledDiv>
            <img src={ '/asset/img/MailIcon.svg' } />{/* 메일모양 아이콘 */}
            <p>{props.val1}</p>{/* 사이드바 메뉴 아이템 */}
        </StyledDiv>
    )
}

export default NavItem;