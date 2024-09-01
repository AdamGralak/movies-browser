import React from "react";
import { selectLoading, selectPeopleImagePath } from "./peopleListSlice";
import { useSelector } from "react-redux";
import { Header } from "../../common/Header/styled";
import { Container } from "../../common/Container/styled";
import { People, Content, Photo, Name } from "./styled";

export const PeopleList = () => {
    const people = useSelector(selectPeopleImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = "https://image.tmdb.org/t/p/";
    const size = {
        small: "w200",
        large: "w400",
    };

    if (loading === true) return <p>Loading Page (spinner)</p>;

    return (
        <Container>
            <Header>Popular people</Header>
            <People>
                {people.map((person) => {
                    const url = `${baseURL}${size.small}${person.profile_path}`;
                    return (
                        <Content key={person.id}>
                            <Photo
                                key={person.id}
                                src={url}
                                alt={person.name}
                            />
                            <Name>
                                {person.name}
                            </Name>
                        </Content>
                    );
                })}
            </People>
        </Container>
    )
};

export default PeopleList;