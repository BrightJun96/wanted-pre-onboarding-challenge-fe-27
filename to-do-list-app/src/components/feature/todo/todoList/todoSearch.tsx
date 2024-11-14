import {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import Search from "../../../search/search.tsx";

// 할일 검색 컴포넌트 > Search 컴포넌트의 구체화된 컴포넌트
function TodoSearch() {
    const [_,setSearchParams] = useSearchParams()


    // 검색어 상태
    const [keyword,setKeyword] = useState<string>("")

    // 검색어 변경
    function handleKeywordChange(keyword:string){
        setKeyword(keyword)
    }

    // 검색
    function handleSearch(keyword:string){
        // 검색 로직
        setSearchParams({
            keyword
        })

    }

    // 검색 초기화
    function handleReset(){
        // 검색 초기화 로직
        setSearchParams({})
        setKeyword("")
    }


    return (
        <Search onSearch={handleSearch} onReset={handleReset} keyword={keyword} onKeywordChange={handleKeywordChange}/>
    );
}

export default TodoSearch;
