export const getMoviesFromApi = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZGJhYjEwYTQ4NTkyNjZjMDFmODAzMmFkNDRmM2ZiMiIsIm5iZiI6MTcyNDg2NzU1NC43NzU5NjUsInN1YiI6IjY2Y2YwNDg1ZjQ1M2U4MzJmNzY5ZjBjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lnAN-emp0pzEatRjt8kDvIhqhzRLJnQoRBny6pnA-10'
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