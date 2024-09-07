import React from "react";
import { People, Content, Photo, Wrapper, Name, Role } from "./styled";
import { Link } from "react-router-dom";

export const PeopleList = ({ people = [], baseurl, renderinmoviedetails }) => {

    if (!Array.isArray(people)) {
        return <p>No people data available</p>;
    }

    return (
        <People>
            {people.map((person) => {
                const url = `${baseurl}${person.profile_path}`;
                return (<Link to={`/people/${person.id}`}>
                    <Content key={person.id}>
                        <Photo photo={url} alt={person.name} />
                        <Wrapper>
                            <Name>{person.name}</Name>
                            {renderinmoviedetails && <Role>Rola</Role>}
                        </Wrapper>
                    </Content>
                </Link>
                );
            })}
        </People>
    );
};

export default PeopleList;