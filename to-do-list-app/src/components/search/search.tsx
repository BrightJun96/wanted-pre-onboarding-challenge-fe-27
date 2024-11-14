import SearchButtons from "./searchButtons.tsx";
import SearchInput from "./searchInput.tsx";

interface ISearch {
    onSearch: (keyword: string) => void; // 검색
    onReset: () => void; // 검색 초기화
    keyword: string; // 검색어
    onKeywordChange: (keyword: string) => void; // 검색어 변경
}

// 검색 컴포넌트
// 역할 : 검색어를 입력받아 검색어를 쿼리스트링으로 설정하고, 검색어를 초기화하는 기능을 제공한다.
function Search({onSearch,onReset,keyword,onKeywordChange}:ISearch) {

    // const [_,setSearchParams] = useSearchParams()

    // 검색
    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSearch(keyword)
        // setSearchParams({
        //     keyword
        // })
    }

    // 검색 초기화
    async function handleReset() {
            // setSearchParams({}); // 쿼리스트링을 빈 객체로 설정하여 모든 쿼리스트링 제거
            // setKeyword(""); // 검색어 초기화
            }

    return (
        <form
            className={"common-flex-column-container"}
            onSubmit={handleSearch}
        >
            {/*검색어*/}
            <section
            className={"search-container"}
            >
                {/*검색어 입력*/}
                <SearchInput keyword={keyword} onKeywordChange={onKeywordChange}/>
                {/*검색,초기화 버튼*/}
                <SearchButtons onSearch={onSearch} onReset={onReset} keyword={keyword}/>
            </section>
        </form>
    );
}

export default Search;
