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
`;

export default CustomLoginPageP;