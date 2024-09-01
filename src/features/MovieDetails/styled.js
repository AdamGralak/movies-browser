import styled from "styled-components";
import { ReactComponent as StarIcon } from '../../images/StarIcon.svg';

export const BackgroundBlack = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    width: 100%;
    height: 600px;
`;

export const BackgroundImage = styled.div`
    background-image: url(${props => props.bgImage});
    box-shadow: inset 0px 0px 63px 51px rgba(0, 0, 0, 1);
    color: ${({ theme }) => theme.color.white};
    background-size: cover;
    background-position: center;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: auto;
    height: 100%;
    padding: 40px 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        font-size: 13px;
        margin: 20px auto;
    }
`;

export const SmallerFont = styled.span`

`;

export const MovieInfo = styled.div`
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.white};
    width: 100%;
    display: flex;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.5);
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        min-height: 0;
        height: 210px;
        font-size: 13px;
    }
`;

export const Poster = styled.img`
    max-width: 312px;
    border-radius: 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-left: 40px;
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
    
`;

export const GreyText = styled.span`
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

export const RatingInfo = styled.div`
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

export const Role = styled.div`
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