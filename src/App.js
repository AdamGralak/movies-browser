import React, { useEffect } from 'react';
import { GlobalStyle } from './globalStyles';
import { StyledNavigation, StyledInput } from "./common/Navigation/styled";
import { HashRouter, NavLink, Route, Routes, Navigate } from "react-router-dom";
import logo from "./images/logo.svg";
import { PeopleListPage } from './features/PeopleListPage';
import { MoviesListPage } from './features/MoviesListPage';
import { useDispatch } from 'react-redux';
import { fetchMoviesGenres } from './core/moviesListPage/moviesListSlice';
import Paginator from './common/Paginator';
import { Error } from './common/Error';
import { MovieDetails } from './features/MovieDetails';
import PeopleDetails from './features/PeopleDetails';
import { NoResults } from './common/NoResults';
import { SearchResults } from './common/SearchResults';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMoviesGenres());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <StyledNavigation>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/movies">MOVIES</NavLink>
            </li>
            <li>
              <NavLink to="/people">PEOPLE</NavLink>
            </li>
          </ul>
          <StyledInput
            type="text"
            placeholder="Search in..."
          />
        </StyledNavigation>
        <Routes>
          <Route path="/movies" element={<MoviesListPage />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/people/:id" element={<PeopleDetails />} />
          <Route path="/people" element={<PeopleListPage />} />
          <Route path="/no-connection" element={<Error />} />
          <Route path="/no-results" element={<NoResults />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </HashRouter >
      <Paginator />
    </>
  );
}

export default App;
