import SearchButtons from "./searchButtons.tsx";
import SearchFormWrapper from "./searchFormWrapper.tsx";
import SearchInput from "./searchInput.tsx";

interface ISearch {
    onSearch: (keyword: string) => void; // 검색
    onReset: () => void; // 검색 초기화
    keyword: string; // 검색어
    onKeywordChange: (keyword: string) => void; // 검색어 변경
}

// 검색 컴포넌트
// 역할 : 검색에 대한 최소한의 인터페이스만 구현한다. 구체화된 로직의 상위 구현 컴포넌트에서 해결한다.
// 여러 컴포넌트에서 해당 컴포넌트의 구조가 동일하게 사용되는 경우 해당 컴포넌트를 사용, 아니라면 아래 하위 컴포넌트들을 조합하여 사용
function Search({onSearch,onReset,keyword,onKeywordChange}:ISearch) {
    return (
        <SearchFormWrapper
            onSearch={onSearch}

        >
                {/*검색어 입력*/}
                <SearchInput keyword={keyword} onKeywordChange={onKeywordChange}/>
                {/*검색,초기화 버튼*/}
                <SearchButtons onSearch={onSearch} onReset={onReset} keyword={keyword}/>
        </SearchFormWrapper>
    );
}

export default Search;
