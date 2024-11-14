import CustomInput from "../input/customInput.tsx";

// 검색어 입력 컴포넌트
function SearchInput({keyword,onKeywordChange}:{keyword:string,onKeywordChange:(keyword:string)=>void}) {
    return (
        <CustomInput
            label={""}
            value={keyword}
            onChange={onKeywordChange}
            inputType={"text"}
        />
    );
}

export default SearchInput;
