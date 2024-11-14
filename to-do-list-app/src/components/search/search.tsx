import {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import CustomButton from "../button/customButton.tsx";
import CustomInput from "../input/customInput.tsx";

// 검색 컴포넌트
// 역할 : 검색어를 입력받아 검색어를 쿼리스트링으로 설정하고, 검색어를 초기화하는 기능을 제공한다.
function Search() {

    const [_,setSearchParams] = useSearchParams()

   const [keyword,setKeyword] = useState<string>("")
    // 검색
    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSearchParams({
            keyword
        })    }

    // 검색 초기화
    async function handleReset() {
            setSearchParams({}); // 쿼리스트링을 빈 객체로 설정하여 모든 쿼리스트링 제거
            setKeyword(""); // 검색어 초기화
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
                    onChange={value =>setKeyword(value)}
                    inputType={"text"}
                />
                {/*검색어를 쿼리스트링으로 설정*/}
                <CustomButton
                    disabled={keyword === ""}
                    label={"검색"}
                    onClick={() => setSearchParams({keyword})}
                    type={"submit"}
                />
                {/*초기화*/}
                <CustomButton
                    label={"초기화"}
                    onClick={handleReset}
                    type={"button"}
                />
            </section>
        </form>
    );
}

export default Search;
