import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`

    `;

function Icon(props){
    return(
        <StyledDiv>
            <img src={ `asset/${props.image}` } />{/* 메일모양 아이콘 */}
        </StyledDiv>
    )
}

export default Icon;