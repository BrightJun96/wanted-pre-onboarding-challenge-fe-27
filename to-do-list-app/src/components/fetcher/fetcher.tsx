import {UseQueryResult} from "@tanstack/react-query";
import React, {ReactElement} from "react";
import ErrorMessage from "../error/errorMessage.tsx";
import Loading from "../loading/loading.tsx";

interface FetcherProps {
    children: ReactElement;
    query: () => UseQueryResult<any, Error>;
    dataPropName?: string;
}

function Fetcher({children,query,dataPropName="data"}:FetcherProps) {

    const {
        data,
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
        React.cloneElement(children, { [dataPropName]:data })
    );
}

export default Fetcher;
