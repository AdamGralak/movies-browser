import React from 'react';
import { GlobalStyle } from './globalStyles';
import { StyledNavigation, StyledInput } from "./common/Navigation/styled";
import { HashRouter, NavLink, Route, Routes, Navigate } from "react-router-dom";
import logo from "./images/logo.svg";
import { PeopleList } from './features/PeopleList';
import { MoviesList } from './features/MoviesList';
import { useDispatch } from 'react-redux';
import { clearMoviesListState, fetchMoviesList } from './features/MoviesList/moviesListSlice';
import { clearPeopleState, fetchPeopleList } from './features/PeopleList/peopleListSlice';

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
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/people" element={<PeopleList />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
