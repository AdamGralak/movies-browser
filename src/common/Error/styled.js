import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as WarningIcon } from "./WarningIcon.svg";

export const Wrapper = styled.article`
  margin-top: 180px;
  display: grid;
  justify-items: center;
  grid-gap: 24px;
  text-align: center;
  padding: 0 16px;
  width: 100%;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    margin-top: 140px;
    grid-gap: 20px;
    padding: 0 12px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    margin-top: 100px;
    grid-gap: 16px;
    padding: 0 8px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    margin-top: 70px;
    grid-gap: 12px;
    padding: 0 4px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    margin-top: 40px;
    grid-gap: 8px;
    padding: 0 2px; 
  }
`;

export const IconWrapper = styled.div`
  width: 120px; 
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledWarningIcon = styled(WarningIcon)`
  width: 100px; 
  height: 90.83px;
`;

export const ErrorMessage = styled.div`
  width: 100%;
  max-width: 592px;
  height: auto;
  display: grid;
  justify-items: center;
  grid-gap: 24px;
`;

export const ErrorHeader = styled.header`
  font-weight: 700;
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  line-height: 43.2px;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    font-size: 32px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    font-size: 28px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    font-size: 24px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    font-size: 20px; 
  }
`;

export const ErrorInfo = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: center;
  max-width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    font-size: 18px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    font-size: 16px; 
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    font-size: 14px;
  }
`;

export const StyledButtonLink = styled(Link)`
  width: 100%;
  max-width: 181px;
  height: 51px;
  padding: 16px 24px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonText = styled.div`
  width: 100%;
  max-width: 133px;
  height: 19px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
`;
