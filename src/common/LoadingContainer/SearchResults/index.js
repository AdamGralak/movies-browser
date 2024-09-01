import { LoadingContainer } from "../../LoadingContainer";

export const SearchResults = ({ searchQuery = "Mulan" }) => (
  <LoadingContainer headerText={`Search results for "${searchQuery}"`} />
);
