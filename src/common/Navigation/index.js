import React from "react";
import { Item, List, StyledLogoNavLink, Logo, StyledInput, StyledNavigation, Wrapper, StyledNavLink } from "./styled";
import { useDispatch } from "react-redux";
import { goToFirstPage } from "../../core/actual/actualStateSlice";

export const Navigation = () => {
    const dispatch = useDispatch();
    return (
        <StyledNavigation>
            <Wrapper>
                <List>
                    <StyledLogoNavLink to="/movies">
                        <Logo />
                    </StyledLogoNavLink>
                    <Item>
                        <StyledNavLink to="/movies" onClick={() => dispatch(goToFirstPage())}>MOVIES</StyledNavLink>
                    </Item>
                    <Item>
                        <StyledNavLink to="/people" onClick={() => dispatch(goToFirstPage())}>PEOPLE</StyledNavLink>
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
