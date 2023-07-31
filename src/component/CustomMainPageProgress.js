import styled, {css} from "styled-components";

const CustomMainPageProgress = styled.progress`
    display: flex;
    width:75vw;

    ${props => props.$progressbar && css`

    `}s
`;

export default CustomMainPageProgress;