import React from "react";
import styled from "styled-components";


const StyledProgress = styled.progress`
    display: flex;
    flex-direction: row;    
    width: 100%;
    `;


function ProgressBar(props){
    return(
        <StyledProgress min="0" max="100" value={props.val1}></StyledProgress>
    )
}

export default ProgressBar;