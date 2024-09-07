import styled from "styled-components";

export const People = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        grid-template-columns: 1fr 1fr;
        grid-gap: 16px;
    }
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    max-width: 208px;
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        padding: 12px;
    }
    &:hover {
        transform: scale(1.01);
    }
`;

export const Photo = styled.div`
    background-image: url(${props => props.photo});
    position: relative;
    background-size: cover;
    background-position-y: top;
    background-position-x: center ;
    padding-bottom: 131.25%;
    width: 100%;
    border-radius: 5px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        position: relative;
        padding-bottom: 146.67%; 
        min-height: 0px;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
`;

export const Name = styled.div`
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    margin-top: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        margin-top: 8px;
        font-size: 14px;
    }
`;

export const Role = styled.div`
    font-weight: 400;
    font-size: 18px;
    color: ${({ theme }) => theme.color.darkerGrey};
    text-align: center;
    margin-top: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        margin-top: 8px;
        font-size: 13px;
    }
`;