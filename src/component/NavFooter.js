import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    padding: 2rem;
    border-top: 0.125rem solid #000;
    border-top-color: #DFE6E9;
`;

const StyledButton = styled.button`
`;

function NavFooter(props){

    return(
        <StyledDiv>
            <img src={ '/asset/img/Avatar.svg' }></img>{/* 프로필 이미지 */}
            <div>
                <p>{props.val1}</p>{/* 아름 */}
                <p>View Profile</p>{/* 뷰 프로파일 버튼? or a href? */}
            </div>
            <StyledButton><img src={ '/asset/img/SettingsIcon.svg' } /></StyledButton> {/* 설정모양버튼 */}
        </StyledDiv>
    )
}

export default NavFooter;