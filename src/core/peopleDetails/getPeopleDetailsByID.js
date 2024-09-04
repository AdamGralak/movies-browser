import { accessToken } from "../accessToken";

export const getPeopleDetailsFromApi = async (personID) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  };

try {
  const response = await fetch(`https://api.themoviedb.org/3/person/${personID}?language=en-US`, options);
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
