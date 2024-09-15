import { useLocation } from "react-router-dom";

const useQueryParameter = (searchQueryParamName) => {
    const location = useLocation();
    return (new URLSearchParams(location.search)).get(searchQueryParamName)
};

export default useQueryParameter;