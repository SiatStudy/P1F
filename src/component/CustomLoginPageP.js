import styled, {css} from "styled-components";

const CustomLoginPageP = styled.p`
    ${props => props.$findIdResultP && css`
        display: flex;
        margin : 7.1rem 0 7.1rem 0;
        justify-content: center;
        align-items: center;
        align-self: stretch;
        color: #000;
        font-family: Noto Sans;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;
        line-height: 1rem; /* 106.667% */
        letter-spacing: 0.02813rem;
    `}
    ${props => props.$errorMessage && css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin : -1rem auto -1rem 0;
    color: #ED4545;
    font-family: Noto Sans;
    font-size: 0.695rem;
    font-style: normal;
    font-weight: 600;
    line-height: 0.875rem; /* 140% */
    letter-spacing: 0.0125rem;
        ${props => props.$resultMessage && css`
            color : #3E54AC;
        `}
        ${props => props.$timer && css`
            margin : -1.3rem 0 -1rem 15rem;
        `}
    `}
`;

export default CustomLoginPageP;