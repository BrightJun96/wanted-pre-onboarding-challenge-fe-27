import CustomButton from "../button/customButton.tsx";
import CustomInput from "../input/customInput.tsx";

interface ISearch {
    onSearch: (keyword: string) => void; // 검색
    onReset: () => void; // 검색 초기화
    keyword: string; // 검색어
    onKeywordChange: (keyword: string) => void; // 검색어 변경
}

// 검색 컴포넌트
// 역할 : 검색어를 입력받아 검색어를 쿼리스트링으로 설정하고, 검색어를 초기화하는 기능을 제공한다.
// 이 컴포넌트의 OCP 원칙에 잘 따르고 있을까?
// 이 컴포넌트의 SRP 원칙에 잘 따르고 있을까?
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
                <CustomInput
                    label={""}
                    value={keyword}
                    onChange={onKeywordChange}
                    inputType={"text"}
                />
                {/*검색어를 쿼리스트링으로 설정*/}
                <CustomButton
                    disabled={keyword === ""}
                    label={"검색"}
                    type={"submit"}
                />
                {/*초기화*/}
                <CustomButton
                    label={"초기화"}
                    onClick={onReset}
                    type={"button"}
                />
            </section>
        </form>
    );
}

export default Search;
