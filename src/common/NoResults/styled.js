import styled from "styled-components";
import { ReactComponent as NoResultsIcon } from "./noResultsIcon.svg";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 50px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    margin-top: 40px;
    padding: 15px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    margin-top: 30px;
    padding: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    margin-top: 20px;
    padding: 5px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    margin-top: 10px;
    padding: 2px;
  }
`;

export const Heading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.color.black};
  text-align: left;
  width: 100%;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    font-size: 22px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    font-size: 20px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    font-size: 16px;
  }
`;

export const StyledNoResultsIcon = styled(NoResultsIcon)`
  margin-top: 20px;
  width: 100%;
  max-width: 668px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    max-width: 550px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    max-width: 450px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    max-width: 350px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    max-width: 250px;
  }
`;
