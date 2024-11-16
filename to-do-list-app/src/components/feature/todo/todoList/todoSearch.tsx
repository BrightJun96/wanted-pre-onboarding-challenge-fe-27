import {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import SearchButtons from "../../../search/searchButtons.tsx";
import SearchFormWrapper from "../../../search/searchFormWrapper.tsx";
import SearchInput from "../../../search/searchInput.tsx";

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
        <SearchFormWrapper
            onSearch={handleSearch}

        >
            {/*검색어 입력*/}
            <SearchInput keyword={keyword} onKeywordChange={handleKeywordChange}/>
            {/*검색,초기화 버튼*/}
            <SearchButtons onSearch={handleSearch} onReset={handleReset} keyword={keyword}/>
        </SearchFormWrapper>
    );
}

export default TodoSearch;
