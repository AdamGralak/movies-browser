import styled from "styled-components";

export const Section = styled.div`
    margin-bottom: 40px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin-bottom: 16px;
    }
`;