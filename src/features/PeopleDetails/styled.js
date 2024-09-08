import styled from "styled-components";

export const PersonInfo = styled.div`
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 5fr;
    grid-template-rows: auto 1fr;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        min-height: 0;
        grid-template-columns: 1fr 1.08fr;
        padding: 16px;
    }
`;

export const Photo = styled.img`
    width: 312px;
    border-radius: 5px;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        width: 100%;
    }
`;

export const Info = styled.div`
    height: 100%;
    font-size: 18px;
    margin-left: 40px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin-left: 16px;
        font-size: 12px;
    }
`;

export const Name = styled.div`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 14px;
    }
`;

export const GreyText = styled.span`
    color: ${({ theme }) => theme.color.darkerGrey};
    margin-right: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin-right: 4px;
    }
`;

export const Birth = styled.span`
    display: none;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        display: inline;
    }
`;

export const Description = styled.div`
    font-size: 20px;
    height: 100%;
    margin-left: 40px;
    margin-top: 16px;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        margin-left: 0;
       
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 14px;
    }
`;

export const DisabledOnMobile = styled.span`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        display: none;
    }
`;