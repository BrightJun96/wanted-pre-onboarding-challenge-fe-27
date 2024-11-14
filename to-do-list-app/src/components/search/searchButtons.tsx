import CustomButton from "../button/customButton.tsx";

// 검색, 초기화 버튼
function SearchButtons({ onSearch, onReset, keyword }:{
    onSearch: (keyword: string) => void;
    onReset: () => void;
    keyword: string;
}) {
    return (
        <>
            <CustomButton
                disabled={keyword === ""}
                label={"검색"}
                onClick={() => onSearch(keyword)}
                type={"submit"}
            />
            {/*초기화*/}
            <CustomButton
                label={"초기화"}
                onClick={onReset}
                type={"button"}
            />
        </>
    );
}

export default SearchButtons;
