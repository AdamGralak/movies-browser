import styled from "styled-components";

export const Header = styled.h1`
    font-weight: 600;
    font-size: 36px;
    margin: 0;
    margin-bottom: 24px;
    padding: 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        font-size: 18px;
        margin-bottom: 12px;
    }
`;