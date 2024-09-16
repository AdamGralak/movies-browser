import React, { useEffect } from 'react';
import { GlobalStyle } from './globalStyles';
import { Navigation } from "./common/Navigation";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { PeopleListPage } from './features/PeopleListPage';
import { MoviesListPage } from './features/MoviesListPage';
import { useDispatch } from 'react-redux';
import { fetchMoviesGenres } from './core/moviesListPage/moviesListSlice';
import { ConnectionError } from './common/Message/ConnectionError';
import { MovieDetails } from './features/MovieDetails';
import PeopleDetails from './features/PeopleDetails';
import { NoResults } from './common/Message/MessageContainer/NoResults';
import { Loading } from './common/Message/MessageContainer/Loading';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesGenres());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/movies/page/:page" element={<MoviesListPage />} />
          <Route path="/movies" element={<Navigate to="/movies/page/1" />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/people/page/:page" element={<PeopleListPage />} />
          <Route path="/people/:id" element={<PeopleDetails />} />
          <Route path="/people" element={<Navigate to="/people/page/1" />} />
          <Route path="/no-connection" element={<ConnectionError />} />
          <Route path="/" element={<Navigate to="/movies/page/1" />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
