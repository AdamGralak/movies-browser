import { Container } from "../Container/styled";
import { Wrapper, InfoHeader, StyledSpinnerIcon } from "./styled";

export const LoadingContainer = ({ headerText }) => (
  <Container>
    <Wrapper>
      <InfoHeader>{headerText}</InfoHeader>
      <StyledSpinnerIcon />
    </Wrapper>
  </Container>
);
