import React from "react";
import { StyledInput } from "../../common/Navigation/styled";
import { useLocation, useNavigate } from "react-router-dom";
import useQueryParameter from "./useQueryParameter";
import useReplaceQueryParameter from "./useReplaceQueryParameter";
import searchQueryParamName from "./searchQueryParameter";

export const SearchInput = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";


    const onInputChange = ({ target }) => {
        const newValue = target.value;

        replaceQueryParameter({
            key: searchQueryParamName,
            value: newValue,
        });

        if (actualLocation === "movie") {
            navigate(`/movies/page/1?${new URLSearchParams({ [searchQueryParamName]: newValue }).toString()}`);
        } else if (actualLocation === "people") {
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
