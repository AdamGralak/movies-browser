import styled from "styled-components";

export const Container = styled.div`
    max-width: 1400px;
    margin: 40px auto;
    padding: 0 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        font-size: 13px;
        margin: 20px auto;
    }
`;