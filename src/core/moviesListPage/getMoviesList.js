import { accessToken } from "../accessToken";

export const getMoviesFromApi = async ({ page, query, actualLocation }) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        }
    };

    const url = query === ""
        ? `https://api.themoviedb.org/3/${actualLocation}/popular?language=en-US&page=${page}`
        : `https://api.themoviedb.org/3/search/${actualLocation}?query=${query}&include_adult=false&language=en-US&page=${page}`;

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error("Error fetching movies:", err);
        return null;
    }
}
