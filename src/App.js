import React from 'react';
import { GlobalStyle } from './globalStyles';
import { StyledNavigation, StyledInput } from "./common/Navigation/styled";
import { HashRouter, NavLink, Route, Routes, Navigate } from "react-router-dom";
import logo from "./images/logo.svg";
import { PeopleListPage } from './features/PeopleListPage';
import { MoviesListPage } from './features/MoviesListPage';
import { useDispatch } from 'react-redux';
import { clearMoviesListState, fetchMoviesList } from './features/MoviesListPage/moviesListSlice';
import { clearPeopleState, fetchPeopleList } from './features/PeopleListPage/peopleListSlice';
import Paginator from './common/Paginator';
import { Error } from './common/Error';
import { MovieDetails } from './features/MovieDetails';
import PeopleDetails from './features/PeopleDetails';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchMoviesList());

  return (
    <>
      <GlobalStyle />
      <HashRouter>
        <StyledNavigation>
          <img src={logo} alt="logo" />
          <ul>
            <li onClick={() => {
              dispatch(fetchMoviesList());
              dispatch(clearPeopleState());
            }}>
              <NavLink to="/movies">MOVIES</NavLink>
            </li>
            <li onClick={()=>{
              dispatch(fetchPeopleList());
              dispatch(clearMoviesListState());
            }}>
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
          <Route path="/moviepage" element={<MovieDetails />} />
          <Route path="/personpage" element={<PeopleDetails />} />
          <Route path="/people" element={<PeopleListPage />} />
          <Route path="/no-connection" element={<Error />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </HashRouter>
      <Paginator/>
    </>
  );
}

export default App;
