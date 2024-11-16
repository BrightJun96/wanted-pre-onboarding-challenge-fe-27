import React from 'react';

function SearchFormWrapper({
    onSearch,children
                           }:{
    onSearch: (keyword: string) => void; // 검색
    children: React.ReactNode
}) {

    // 검색
    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSearch("")
    }
    return (
        <form
            className={"search-container"}
            onSubmit={handleSearch}
        >
            {children}
        </form>
    );
}

export default SearchFormWrapper;
