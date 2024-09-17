import React from "react";
import { Item, List, StyledLogoNavLink, Logo, StyledNavigation, Wrapper, StyledNavLink } from "./styled";
import { SearchInput } from "../../core/search";

export const Navigation = () => {
    
    return (
        <StyledNavigation>
            <Wrapper>
                <List>
                    <StyledLogoNavLink to="/movies">
                        <Logo />
                    </StyledLogoNavLink>
                    <Item>
                        <StyledNavLink to="/movies" >MOVIES</StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to="/people" >PEOPLE</StyledNavLink>
                    </Item>
                </List>
                <SearchInput/>
            </Wrapper>
        </StyledNavigation>
    );
};

export default Navigation;
