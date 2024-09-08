import { Container } from "../../Container/styled";
import { Wrapper, InfoHeader, Icon } from "./styled";

export const MessageContainer = ({ headerText, IconComponent, iconProps = {} }) => (
  <Container>
    <Wrapper>
      <InfoHeader>{headerText}</InfoHeader>
      <Icon as={IconComponent} {...iconProps} />
    </Wrapper>
  </Container>
);
