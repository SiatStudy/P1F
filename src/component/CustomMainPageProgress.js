import styled, {css} from "styled-components";

const CustomMainPageProgress = styled.progress`
    display: flex;
    

    ${props => props.$progressbar && css`
        width: 77rem;
    `}
`;

export default CustomMainPageProgress;