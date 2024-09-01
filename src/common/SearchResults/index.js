import { Container } from "../Container/styled";
import { Wrapper, InfoHeader, StyledSearchResultsIcon } from "./styled";

export const SearchResults = ({ searchQuery = "Mulan" }) => (
  <Container>
    <Wrapper>
      <InfoHeader>Search results for "{searchQuery}"</InfoHeader>
      <StyledSearchResultsIcon />
    </Wrapper>
  </Container>

);