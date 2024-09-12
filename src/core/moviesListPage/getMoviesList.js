import { accessToken } from "../accessToken";

export const getMoviesFromApi = async ({ page }) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${accessToken}`,
        }
    };
    
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`, options);
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
