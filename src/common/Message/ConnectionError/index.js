import { Container } from "../../Container/styled";
import {
  StyledButtonLink,
  ErrorMessage,
  ErrorHeader,
  ErrorInfo,
  Wrapper,
  IconWrapper,
  StyledWarningIcon,
  ButtonText
} from "./styled";

export const ConnectionError = () => (
  <Container>
    <Wrapper>
      <IconWrapper>
        <StyledWarningIcon />
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
  </Container>
);
