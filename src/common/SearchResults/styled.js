import styled, { keyframes } from "styled-components";
import { ReactComponent as SearchResultsIcon } from "./IconSpinner.svg";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 56px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    margin-top: 45px;  
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    margin-top: 35px;  
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    margin-top: 30px;  
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    margin-top: 24px;  
  }
`;


export const InfoHeader = styled.h1`
  margin: 0 0 0 276px;
  font-size: 36px;
  font-weight: 600;
  line-height: 43.2px;
  color: ${({ theme }) => theme.color.black};
  text-align: left;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    font-size: 22px;
    margin: 0 0 0 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    font-size: 20px;
    margin: 0 0 0 120px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    font-size: 18px;
    margin: 0 0 0 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    font-size: 14px;
    font-weight: 500;
    margin: 0 0 0 16px;
  }
`;

export const StyledSearchResultsIcon = styled(SearchResultsIcon)`
  width: 100%;
  max-width: 91px;
  height: auto;
  margin-top: 120px;
  animation: ${rotate} 1s linear infinite;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    max-width: 70px;
    margin-top: 90px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    max-width: 60px;
    margin-top: 70px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    max-width: 50px;
    margin-top: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    max-width: 35px;
    margin-top: 24px; 
  }
`;


