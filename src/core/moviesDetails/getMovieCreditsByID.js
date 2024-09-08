import { accessToken } from "../accessToken";

export const getMovieCreditsFromApi = async (movieID) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  };

try {
  const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}/credits?language=en-US`, options);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const credits = await response.json();
  return credits;
} catch (err) {
  console.error(err);
  return null;
}
}
