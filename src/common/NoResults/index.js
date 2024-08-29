import { Wrapper, Heading, StyledNoResultsIcon } from "./styled";

export const NoResults = ({ searchQuery = "Muan" }) => (
  <Wrapper>
    <Heading>Sorry, there are no results for "{searchQuery}"</Heading>
    <StyledNoResultsIcon />
  </Wrapper>
);