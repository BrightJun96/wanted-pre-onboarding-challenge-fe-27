import {useSearchParams} from "react-router-dom";

function useQueryString() {

    function getQueryParams<T extends object>(defaultParams: T): T {
        const [searchParams] = useSearchParams();
        const params: Record<string, any> = {};

        Object.keys(defaultParams).forEach((key) => {
            const value = searchParams.get(key);
            params[key] = value ?? undefined;
        });

        return params as T;
    }
    return {getQueryParams}
}

export default useQueryString;
