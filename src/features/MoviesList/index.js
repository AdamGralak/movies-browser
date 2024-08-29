import React from "react";
import { useSelector } from "react-redux";
import { selectLoading, selectImagePath } from "./moviesListSlice";

export const MoviesList = () => {
    const movies = useSelector(selectImagePath);
    const loading = useSelector(selectLoading);
    const baseURL = "https://image.tmdb.org/t/p/";
    const size = {
        small: "w200",
        large: "w400",
    }

    if (loading===true) return <p>Loading Page (spinner)</p>;

    return (
        <>
            {movies.map(movie => {
                const url = `${baseURL}${size.small}${movie.poster_path}`;
                console.log(url);
                return (
                    <img 
                        key={movie.id} 
                        src={url} 
                        alt={movie.title}
                    />
                );
            })}
        </>
    );
};

export default MoviesList;