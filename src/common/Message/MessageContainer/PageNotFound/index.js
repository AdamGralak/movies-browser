import { ReactComponent as NoResultsIcon } from "../../MessageContainer/NoResultsIcon.svg";
import { MessageContainer } from "../../MessageContainer";

export const PageNotFound = ({ searchQuery }) => (
  <MessageContainer
    headerText={"Page not found"}
    IconComponent={NoResultsIcon}
    iconProps={{
      maxWidth: "668px",
      marginTop: "40px",
      maxWidthMobile2: "550px",
      marginTopMobile2: "35px",
      maxWidthMobile3: "450px",
      marginTopMobile3: "30px",
      maxWidthMobile4: "350px",
      marginTopMobile4: "27px",
      maxWidthMobile5: "250px",
      marginTopMobile5: "24px",
    }}
  />
);
