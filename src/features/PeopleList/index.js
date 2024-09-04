import React from "react";
import { People, Content, Photo, Name, Role } from "./styled";
import { fetchPeopleDetails } from "../../core/peopleDetails/peopleDetailsSlice";
import { useDispatch } from "react-redux";

export const PeopleList = ( { people , baseurl, renderinmoviedetails } ) => {

    const dispatch = useDispatch();
    dispatch(fetchPeopleDetails(81866));

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