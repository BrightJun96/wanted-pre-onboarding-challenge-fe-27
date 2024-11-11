import {useState} from 'react';
import {useSearchParams} from "react-router-dom";
import CustomButton from "../button/customButton.tsx";
import filter from "../filter/filter.tsx";
import CustomInput from "../input/customInput.tsx";

// 검색 컴포넌트
function Search() {

    const [_,setSearchParams] = useSearchParams()

   const [keyword,setKeyword] = useState<string>("")
    // 검색
    async function handleSearch(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setSearchParams(new URLSearchParams(filter as unknown as Record<string, string>))    }

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
                <CustomInput
                    label={""}
                    value={keyword}
                    onChange={value =>setKeyword(value)}
                    inputType={"text"}
                />
                <CustomButton
                    disabled={keyword === ""}
                    label={"검색"}
                    onClick={() => setSearchParams({keyword})}
                    type={"submit"}
                />
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
