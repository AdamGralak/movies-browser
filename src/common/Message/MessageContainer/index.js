import { Container } from "../../Container/styled";
import { Header } from "../../Header/styled";
import { Wrapper, Icon } from "./styled";

export const MessageContainer = ({ headerText, IconComponent, iconProps = {} }) => (
  <Container>
    <Header>{headerText}</Header>
    <Wrapper>
      <Icon as={IconComponent} {...iconProps} />
    </Wrapper>
  </Container>
);
