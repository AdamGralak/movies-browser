import {
  StyledButtonLink,
  ErrorMessage,
  ErrorHeader,
  ErrorInfo,
  Wrapper,
  IconWrapper,
  StyledExclamationIcon,
  StyledWarningIcon,
  ButtonText
} from "./styled";

export const Error = () => (
  <Wrapper>
    <IconWrapper>
      <StyledWarningIcon />
      <StyledExclamationIcon />
    </IconWrapper>
    <ErrorMessage>
      <ErrorHeader>Ooops! Something went wrong...</ErrorHeader>
      <ErrorInfo>
        Please check your network connection <br /> and try again
      </ErrorInfo>
      <StyledButtonLink to="/movies">
        <ButtonText>
          Back to home page
        </ButtonText>
      </StyledButtonLink>
    </ErrorMessage>
  </Wrapper>
);
