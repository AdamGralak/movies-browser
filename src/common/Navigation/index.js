import React from "react";
import { Item, List, StyledLogoNavLink, Logo, StyledInput, StyledNavigation, Wrapper, StyledNavLink } from "./styled";
import { useDispatch } from "react-redux";
import { goToFirstPage } from "../../core/actual/actualStateSlice";
import { useLocation } from "react-router-dom";

export const Navigation = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const actualLocation = location.pathname.includes("movies") ? "movies" : "people";
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
                    placeholder={`Search for ${actualLocation}...`}
                />
            </Wrapper>
        </StyledNavigation>
    );
};

export default Navigation;
