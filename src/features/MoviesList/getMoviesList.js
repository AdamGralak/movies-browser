import {accessToken} from "../accessToken";

export const getMoviesFromApi = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  };
    
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data;
    } catch (err) {
      console.error(err);
      return null;
    }
  }