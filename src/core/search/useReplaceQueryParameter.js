import { useLocation, useNavigate } from "react-router-dom";

const useReplaceQueryParameter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const replaceQueryParameter = ({ key, value }) => {
        const searchParams = new URLSearchParams(location.search);

        if (value === undefined) {
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        navigate(`${location.pathname}?${searchParams.toString()}`);
    };

    return replaceQueryParameter;
};

export default useReplaceQueryParameter;