import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../images/StarIcon.svg';

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
    font-size: 22px;
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
        font-size: 14px;
        padding: 12px;
    }
    &:hover {
        transform: scale(1.01);
    }
`;

export const Photo = styled.img`
    width: 100%;
    border-radius: 5px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {

    }
`;

export const Name = styled.div`
    font-weight: 500;
    display: flex;
    align-items: start;
    justify-content: center;
    text-align: center;
    height: 100%;
    margin-top: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
       
    }
`;