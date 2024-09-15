import React from "react";
import { StyledInput } from "../../common/Navigation/styled";
import { useLocation } from "react-router-dom";
import useQueryParameter from "./useQueryParameter";
import useReplaceQueryParameter from "./useReplaceQueryParameter";
import searchQueryParamName from "./searchQueryParameter";
import { useDispatch } from "react-redux";
import { setActualQuery } from "../actual/actualStateSlice";

export const SearchInput = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const actualLocation = location.pathname.includes("movies") ? "movie" : "people";
    const query = useQueryParameter(searchQueryParamName);
    const replaceQueryParameter = useReplaceQueryParameter();


    const onInputChange = ({ target }) => {
        dispatch(setActualQuery(target.value.trim()));
        replaceQueryParameter({
            key: searchQueryParamName,
            value: target.value.trim() !== "" ? target.value : undefined,
        });
    };

    return (
        <>
            <StyledInput
                type="text"
                placeholder={`Search ${actualLocation}...`}
                value={query || ""}
                onChange={onInputChange}
            />
        </>
    );
};