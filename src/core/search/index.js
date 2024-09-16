import React, { useEffect } from "react";
import { StyledInput } from "../../common/Navigation/styled";
import { useLocation, useNavigate } from "react-router-dom";
import useQueryParameter from "./useQueryParameter";
import useReplaceQueryParameter from "./useReplaceQueryParameter";
import searchQueryParamName from "./searchQueryParameter";
import { useDispatch, useSelector } from "react-redux";
import { selectActualQuery, setActualQuery } from "../actual/actualStateSlice";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const queryFromURL = useSelector(selectActualQuery);
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";

    useEffect(() => {
        if (query !== queryFromURL) {
            dispatch(setActualQuery(query));
        }
    }, [query, queryFromURL, dispatch]);

    const onInputChange = ({ target }) => {
        const newValue = target.value;
        dispatch(setActualQuery(newValue));

        replaceQueryParameter({
            key: searchQueryParamName,
            value: newValue,
        });

        if (actualLocation === "movie" && !location.pathname.startsWith('/movies/page')) {
            navigate(`/movies/page/1?${new URLSearchParams({ [searchQueryParamName]: newValue }).toString()}`);
        } else if (actualLocation === "people" && !location.pathname.startsWith('/people/page')) {
            navigate(`/people/page/1?${new URLSearchParams({ [searchQueryParamName]: newValue }).toString()}`);
        }
    };

    return (
        <StyledInput
            type="text"
            placeholder={`Search ${actualLocation}...`}
            value={query || ""}
            onChange={onInputChange}
        />
    );
};
