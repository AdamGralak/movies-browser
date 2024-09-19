import { useLocation } from "react-router-dom";

const useQueryParameter = (queryParamName) => {
    const location = useLocation();
    const value = new URLSearchParams(location.search).get(queryParamName);
    return value !== null ? value : "";
};

export default useQueryParameter;