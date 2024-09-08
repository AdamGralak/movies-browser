import { ReactComponent as SpinnerIcon } from "../../MessageContainer/SpinnerIcon.svg";
import { MessageContainer } from "../../MessageContainer";

export const Loading = () => (
  <MessageContainer
    headerText="Loading..."
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
