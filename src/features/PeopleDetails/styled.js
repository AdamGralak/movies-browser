import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../images/StarIcon.svg';

export const SmallerFont = styled.span`

`;

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
    max-width: 312px;
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

export const RatingInfo = styled.div`
    display: flex;
    align-items: center;
    margin-top: 8px;
`;

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

export const Poster = styled.img`
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


export const DisabledOnMobile = styled.span`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        display: none;
    }
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