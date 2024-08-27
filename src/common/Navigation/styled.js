import styled from "styled-components";
import icon from "../../images/searchIcon.svg"

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
    padding: 14px 10px;
    margin: 0;
}

&>li {
    width: 102px;
    height: 48px;
    display: grid;
    justify-content: center;
    text-align: center;
    background-color: black;

    @media (max-width: 768px) {
        height: 34px;
        width: 70px;
    }
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

    @media (max-width: 380px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
        grid-template-areas:
            "logo"
            "buttons"
            "input";
        height: auto;
        padding: 20px;
        grid-gap: 10px;

        &>ul {
            grid-area: buttons;
            display: grid;
            grid-auto-flow: column;
            justify-content: center;
            gap: 10px;
            padding-bottom: 8px;
        }

        &>img {
            grid-area: logo;
            width: 170px;
            justify-self: center;
        }
    }

    & a {
        text-decoration: none;
        color: white;
        border-radius: 24px;
        font-size: 18px;
        padding: 6px;
    
        @media (max-width: 768px) {
        font-size: 14px;
    }
    }

    & a.active {
        background-color: black;
        color: white;
        border: 2px solid white;
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
    background-position:20px 8px;
    padding-left: 52px;
    padding-top: 0px;
    padding-bottom: 0px;
    font-size: 18px;

    @media (max-width: 380px) {
        grid-column: span 2;
        margin: 0 auto;
        height: 32px;
        font-size: 16px;
        background-size: 18px 18px;
        background-position:24px 4px;
    }
    
    @media (max-width: 768px) {
        grid-column: span 2;
        margin: 0 auto;
    }
    
    @media (max-width: 1200px) {
        width: 86%;
    }
`;
