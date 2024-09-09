import styled, { keyframes, css } from "styled-components";

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

export const Icon = styled(({ as: IconComponent, ...props }) => (
  <IconComponent {...props} />
))`
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  height: auto;
  margin-top: ${({ marginTop }) => marginTop};

  animation: ${({ isSpinning }) =>
    isSpinning &&
    css`
      ${rotate} 1s linear infinite;
    `};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax2}px) {
    max-width: ${({ maxWidthMobile2 }) => maxWidthMobile2};
    margin-top: ${({ marginTopMobile2 }) => marginTopMobile2};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax3}px) {
    max-width: ${({ maxWidthMobile3 }) => maxWidthMobile3};
    margin-top: ${({ marginTopMobile3 }) => marginTopMobile3};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax4}px) {
    max-width: ${({ maxWidthMobile4 }) => maxWidthMobile4};
    margin-top: ${({ marginTopMobile4 }) => marginTopMobile4};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax5}px) {
    max-width: ${({ maxWidthMobile5 }) => maxWidthMobile5};
    margin-top: ${({ marginTopMobile5 }) => marginTopMobile5};
  }
`;
