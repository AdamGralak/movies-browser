import React from "react";
import { People, StyledLink, Content, Photo, Wrapper, Name, Role } from "./styled";

export const PeopleList = ({ people = [], baseurl, renderinmoviedetails }) => {

    if (!Array.isArray(people)) {
        return <p>No people data available</p>;
    }

    return (
        <People>
            {people.map((person) => {
                const url = `${baseurl}${person.profile_path}`;
                return (
                    <StyledLink to={`/people/${person.id}`} key={person.id}>
                        <Photo photo={url} alt={person.name} />
                        <Wrapper>
                            <Name>{person.name}</Name>
                            {renderinmoviedetails && <Role>Rola</Role>}
                        </Wrapper>
                    </StyledLink>
                );
            })}
        </People>
    );
};

export default PeopleList;