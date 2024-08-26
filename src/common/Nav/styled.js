import styled from "styled-components";
import icon from "./searchIcon.svg"

export const StyledNavigation = styled.nav`
    background-color: black;
    color: white;
    width: 100%;
    height: 94px;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 4fr;
    align-items: center;
    justify-content: center;
    padding: 0 calc(100%/8);

&>ul {
    list-style-type: none;
    display: grid;
    grid-auto-flow: column;
    gap: 20px;
    list-style: none;
    padding: 24px 20px;
    margin: 0;
}

@media (max-width: 768px) {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(2, auto);
        height: 142px;
        padding: 20px;
        grid-gap: 10px;

        &>ul {
            padding: 8px 12px;
        }

        &>img {
            width: 170px;
        }
    }
`;

export const StyledButton = styled.button`
    width: 102px;
    height: 48px;
    border-radius: 24px;
    border: 2px solid white;
    background-color: black;
    color: white;

    @media (max-width: 768px) {
        height: 34px;
        width: 70px;
        font-size: 12px;
    }
`;

export const StyledInput = styled.input`
    display: grid;
    justify-self: end;
    height: 48px;
    min-width: 200px;
    width: 430px;
    border-radius: 24px;
    border: 2px solid white;
    outline: none;
    background-image: url(${icon});
    background-size: 24px 24px;
    background-repeat: no-repeat;
    background-position:24px 8px;
    padding-left: 64px;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 18px;

    
    @media (max-width: 768px) {
        grid-column: span 2;
        margin: 0 auto;
    }
    
    @media (max-width: 1200px) {
        width: 86%;
    }
`;
