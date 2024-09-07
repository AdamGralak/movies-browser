import styled from "styled-components";
import icon from "../../images/searchIcon.svg"
import { NavLink } from "react-router-dom";
import { ReactComponent as logo} from '../../images/logo.svg';

export const StyledNavigation = styled.nav`
    background-color: black;
    color: white;
    width: 100%;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: 0 auto;
    padding: 20px 40px; 
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        flex-direction: column;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax21}px) {
        padding: 20px 16px; 
    }
`;

export const StyledLogoNavLink = styled(NavLink)`
    display: flex;
    align-items: center;
`;

export const Logo = styled(logo)`
    cursor: pointer;
    margin-right: 70px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        margin-right: 10px;
    }
`;

export const List = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        justify-content: space-between;
        width: 100%;
    }
`;

export const Item = styled.div`
    margin-left: 10px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
        margin-left: 0;
    }
`;

export const StyledNavLink = styled(NavLink)`
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.black};
    border-radius: 24px;
    padding: 12px 24px;
    transition: 0.3s;
    &:hover {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
    &.active {
        border: 1px solid ${({ theme }) => theme.color.white};
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        font-size: 12px;
        padding: 8px 12px;
    }
`;

export const StyledInput = styled.input`
    display: grid;
    height: 48px;
    max-width: 430px;
    width: 100%;
    margin-left: 20px;
    border-radius: 24px;
    border: 2px solid white;
    outline: none;
    background-image: url(${icon});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position:20px 8px;
    padding-left: 52px;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
        max-width: 512px;
        margin-top: 22px;
        margin-left: 0;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
        font-size: 14px;
    }
`;
