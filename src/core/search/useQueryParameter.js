import { useLocation } from "react-router-dom";

const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    const value = new URLSearchParams(location.search).get(searchQueryParamName);
    return value !== null ? value : "";
};

export default useQueryParameter;