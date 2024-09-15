
import { accessToken } from "../accessToken";

export const getPeopleFromApi = async ({ page, query, actualLocation }) => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${accessToken}`,
    }
  };

  const param = actualLocation === "people" ? "person" : actualLocation;
  const url = query === ""
    ? `https://api.themoviedb.org/3/${param}/popular?language=en-US&page=${page}`
    : `https://api.themoviedb.org/3/search/${param}?query=${query}&include_adult=false&language=en-US&page=${page}`;
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
};