import React from 'react';
import { GlobalStyle } from './globalStyles';
import { StyledNavigation, StyledInput } from "./common/Navigation/styled";
import { HashRouter, NavLink, Route, Routes, Navigate } from "react-router-dom";
import logo from "./images/logo.svg";
import { PeopleList } from './features/PeopleList';
import { MoviesList } from './features/MoviesList';
import { Error } from './common/Error';
import { NoResults } from './common/NoResults';

function App() {
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
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/people" element={<PeopleList />} />
          <Route path="/no-connection" element={<Error />} />
          <Route path="/no-results" element={<NoResults />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
        
      </HashRouter>
    </>
  );
}

export default App;
