import { MessageContainer } from "../../MessageContainer";
import { ReactComponent as SpinnerIcon } from "../../MessageContainer/SpinnerIcon.svg";

export const SearchResults = ({ searchQuery = "Mulan" }) => (
  <MessageContainer
    headerText={`Search results for "${searchQuery}"`}
    IconComponent={SpinnerIcon}
    iconProps={{
      isSpinning: true,
      maxWidth: "91px",
      marginTop: "120px",
      maxWidthMobile2: "70px",
      marginTopMobile2: "90px",
      maxWidthMobile3: "60px",
      marginTopMobile3: "70px",
      maxWidthMobile4: "50px",
      marginTopMobile4: "50px",
      maxWidthMobile5: "35px",
      marginTopMobile5: "24px",
    }}
  />
);
