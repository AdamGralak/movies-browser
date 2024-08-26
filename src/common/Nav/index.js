import React from "react";
import { StyledNavigation, StyledButton, StyledInput } from "./styled";
import logo from "./logo.svg";

export const Navigation = () => {
    return (
        <StyledNavigation>
            <img src={logo} alt="logo" />
            <ul>
                <li>
                    <StyledButton>MOVIES</StyledButton>
                </li>
                <li>
                    <StyledButton>PEOPLE</StyledButton>
                </li>
            </ul>
            <StyledInput
                type="text"
                placeholder="Search in..."
            />
        </StyledNavigation>
    )
};