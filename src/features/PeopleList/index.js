import React from "react";
import { selectLoading, selectPeopleImagePath } from "./peopleListSlice";
import { useSelector } from "react-redux";

export const PeopleList = () => {
    const people = useSelector(selectPeopleImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = "https://image.tmdb.org/t/p/";
    const size = {
        small: "w200",
        large: "w400",
    };

    if (loading===true) return <p>Loading Page (spinner)</p>;

    return (
        <>
            {people.map(person => {
                const url = `${baseURL}${size.small}${person.profile_path}`;
                console.log(url);
                return (
                    <img 
                        key={person.id} 
                        src={url} 
                        alt={person.name}
                    />
                );
            })}
        </>
    );
};

export default PeopleList;