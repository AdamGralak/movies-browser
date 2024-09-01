import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../images/StarIcon.svg';

export const Movies = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        grid-template-columns: 1fr;
    }
`;

export const Content = styled.div`
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    max-width: 325px;
    display: flex;
    flex-direction: column;
    min-height: 650px;
    padding: 16px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    cursor: pointer;
    transition: 0.3s;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        min-height: 0;
        flex-direction: row;
        height: 210px;
        max-width: none;
        font-size: 13px;
    }
    &:hover {
        transform: scale(1.01);
    }
`;

export const Photo = styled.img`
    width: 100%;
    border-radius: 5px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        flex-direction: row;
        width: auto;
        height: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-top: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        margin-left: 16px;
        margin-top: 0px;
        justify-content: start;
    }
`;

export const Info = styled.div`

`;

export const Title = styled.div`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        font-size: 16px;
    }
`;

export const Year = styled.div`
    color: ${({ theme }) => theme.color.darkerGrey};
`;

export const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Category = styled.div`
    margin: 8px 8px 0 0;
    padding: 8px 16px;
    border-radius: 5px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.color.grey};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        font-size: 10px;
        padding: 4px 8px;
    }
`;

export const Bottom = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`;

export const StyledStarIcon = styled(StarIcon)`
    width: 24px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        width: 16px;
    }
`;

export const Rates = styled.div`
    font-weight: 600;
    margin: 0 12px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        margin: 0 9px;
    }
`;

export const Votes = styled.div`
    color: ${({ theme }) => theme.color.darkerGrey};
`;