import React from "react";
import { Item, List, StyledLogoNavLink, Logo, StyledInput, StyledNavigation, Wrapper, StyledNavLink } from "./styled";

export const Navigation = () => {
    return (
        <StyledNavigation>
            <Wrapper>
                <List>
                    <StyledLogoNavLink to="/movies">
                        <Logo />
                    </StyledLogoNavLink>
                    <Item>
                        <StyledNavLink to="/movies">MOVIES</StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to="/people">PEOPLE</StyledNavLink>
                    </Item>
                </List>
                <StyledInput
                    type="text"
                    placeholder="Search in..."
                />
            </Wrapper>
        </StyledNavigation>
    );
};

export default Navigation;
