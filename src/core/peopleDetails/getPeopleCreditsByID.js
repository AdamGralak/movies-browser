import { accessToken } from "../accessToken";

export const getPeopleCreditsFromApi = async (personID) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  };

try {
  const response = await fetch(`https://api.themoviedb.org/3/person/${personID}/movie_credits?language=en-US`, options);
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
