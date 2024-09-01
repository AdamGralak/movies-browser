import { Container } from "../Container/styled";
import { Wrapper, InfoHeader, StyledNoResultsIcon } from "./styled";

export const NoResults = ({ searchQuery = "Muan" }) => (
  <Container>
    <Wrapper>
      <InfoHeader>Sorry, there are no results for "{searchQuery}"</InfoHeader>
      <StyledNoResultsIcon />
    </Wrapper>
  </Container>

);