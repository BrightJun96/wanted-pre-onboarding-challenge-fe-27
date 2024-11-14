import {UseQueryResult} from "@tanstack/react-query";
import React, {ReactElement} from "react";
import ErrorMessage from "../error/errorMessage.tsx";
import Loading from "../loading/loading.tsx";

interface FetcherProps {
    children: ReactElement;
    query: () => UseQueryResult<any, Error>;
}

function Fetcher({children,query,}:FetcherProps) {

    const {
        error,
        isLoading
    } = query()

    if(isLoading){
        return <Loading/>
    }
    if (error){
        return <ErrorMessage error={error}/>
    }

    return (
        React.cloneElement(children,)
    );
}

export default Fetcher;
