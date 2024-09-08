import styled, { css } from "styled-components";
import { ReactComponent as StarIcon } from '../../images/StarIcon.svg';

export const BackgroundBlack = styled.div`
    background-color: ${({ theme }) => theme.color.black};
    width: 100%;
    height: 770px;
    max-height: 80vh;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        height: 600px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax1}px) {
        height: 500px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        height: 400px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        height: 250px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax41}px) {
        height: 200px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax42}px) {
        height: 148px;
    }
`;

export const BackgroundImage = styled.div`
    background-image: url(${props => props.bgimage});
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
    padding: 40px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        padding: 40px 16px 8px 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        box-shadow: inset 0px 0px 40px 35px rgba(0, 0, 0, 1);
    }
`;

export const HeadTitle = styled.div`
    font-size: 64px;
    font-weight: 600;
    margin-bottom: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 24px;
        margin-bottom: 5px;
    }
`;

export const RatingWrapper = styled.div`
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        display: flex;
        align-items: center;
    }
`;

export const HeadRatingInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin-bottom: 0px;
    }
`;

export const HeadStyledStarIcon = styled(StarIcon)`
    width: 40px;
    height: 40px;
    margin-right: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        width: 16px;
        height: 16px;
    }
`;

export const HeadRates = styled.div`
    font-size: 30px;
    font-weight: 500;
    padding-right: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 14px;
    }
`;

export const HeadSmallerFont = styled.div`
    font-size: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 10px;
    }
`;

export const HeadVotes = styled.div`
    font-size: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 10px;
        margin-left: 8px;
    }
`;

export const MovieInfo = styled.div`
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

export const Poster = styled.img`
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

export const Wrapper = styled.div`
    height: 100%;
    margin-left: 40px;
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin-left: 16px;
    }
`;

export const Title = styled.div`
    font-size: 36px;
    font-weight: 600;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 16px;
    }
`;

export const Year = styled.div`
    font-size: 22px;
    margin: 16px 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 13px;
        margin: 4px 0;
        color: ${({ theme }) => theme.color.darkerGrey};
    }
`;

export const GreyText = styled.span`
    color: ${({ theme }) => theme.color.darkerGrey};
    margin-right: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        display: none;
    }
`;

export const ProductionRelease = styled.div`
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 12px;
    }
`;

export const Categories = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 16px 0;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        margin: 8px 0;
        margin-bottom: -4px;
    }
`;

export const Category = styled.div`
    margin-right: 8px;
    padding: 8px 16px;
    margin-bottom: 8px;
    border-radius: 5px;
    font-size: 14px;
    background-color: ${({ theme }) => theme.color.grey};
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 10px;
        padding: 4px 8px;
    }
`;

export const RatingInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledStarIcon = styled(StarIcon)`
    width: 24px;
    margin-right: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        width: 16px;
    }
`;

export const Rates = styled.div`
    font-size: 22px;
    font-weight: 500;
    padding-right: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 13px;
    }
`;

export const SmallerFont = styled.div`
    font-size: 14px;
    padding-right: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        font-size: 13px;
        color: ${({ theme }) => theme.color.darkerGrey};
        ${({ disabledonmobile }) => disabledonmobile && css`
            display: none;
        `}
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