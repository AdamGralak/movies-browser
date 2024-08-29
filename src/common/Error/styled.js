import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as WarningIcon } from "./WarningIcon.svg";

export const Wrapper = styled.article`
  margin-top: 180px;
  display: grid;
  justify-items: center;
  grid-gap: 24px;
  text-align: center;
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
  width: 592px;
  height: 201px;
  display: grid;
  justify-items: center;
  grid-gap: 24px;
`;

export const ErrorHeader = styled.header`
  font-weight: 700;
  font-size: 36px;
  font-weight: 600;
  width: 592px;
  height: 44px;
  text-align: center;
  line-height: 43.2px;
`;

export const ErrorInfo = styled.h2`
  margin: 0;
  font-size: 22px;
  font-weight: 500;
  line-height: 28.6px;
  text-align: center;
`;

export const StyledButtonLink = styled(Link)`
  width: 181px;
  height: 51px;
  padding: 16px 24px 16px 24px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.scienceBlue};
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
  text-align: center;
`;

export const ButtonText = styled.div`
  width: 133px;
  height: 19px;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
`;
