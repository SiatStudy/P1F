import styled, {css} from "styled-components";

const CustomMainPageDiv = styled.div`
    display: flex;

    ${props => props.$year && css`        
        padding: 0.5rem;
        display: flex;
        justify-content: center;
        flex-shrink: 0;
        color: #3E54AC;
        font-family: Noto Sans;
        font-size: 1.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: 1rem; /* 53.333% */
    `}

    ${props => props.$month && css`    
            padding: 0.5rem;
            display: flex;
            justify-content: center;
            flex-shrink: 0;
            color: #8DCBE6;
            text-align: center;
            font-family: Noto Sans;
            font-size: 1.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: 1rem; /* 53.333% */
    `}
    
    ${props => props.$t1 && css`
        color: var(--yoda-admin-template-blacks-b-100, #2D3436);
        text-align: center;
        font-family: Noto Sans;
        font-size: 1rem;
        font-style: normal;
        font-weight: 200;
        line-height: 1.3125rem; /* 131.25% */
        letter-spacing: 0.03rem;
        background-color: white;
        height: 5.125rem;
        padding: 0.5rem 1rem;
        align-items: center;
        flex: 1 0 0;

    `}
    
    ${props => props.$t2 && css`      
        padding: 0.375rem 1rem;
        justify-content: center;
        justify-item
        align-items: center;
        gap: 0.625rem;
        background-color: white;    
        border-radius: 0.4375rem;
        border: 1px solid #F02;
        background: #FFE7EA;
    `}
`;

export default CustomMainPageDiv;