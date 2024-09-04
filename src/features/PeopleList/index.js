import React from "react";
import { People, Content, Photo, Name, Role } from "./styled";

export const PeopleList = ( { people , baseurl, renderinmoviedetails } ) => {

    return (
        <People>
            {people.map((person) => {
                const url = `${baseurl}${person.profile_path}`;
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
                        {renderinmoviedetails ? <Role>Rola</Role> : "" }
                    </Content>
                );
            })}
        </People>
    )
};

export default PeopleList;