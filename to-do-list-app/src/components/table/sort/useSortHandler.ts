import {SortColumn} from "react-data-grid";
import {useSearchParams} from "react-router-dom";
import {createSortParams} from "./createSortParams.ts";


// 테이블을 사용하는 컴포넌트에서 사용하는 SORT 핸들러
// @todo 이 함수는 리액트에 종속적이지는 않는가?
export function useSortHandler() {
    const [_, setSearchParams] = useSearchParams();

    return (sortColumns: SortColumn[]) => {
        const { columnKey, direction } = createSortParams(sortColumns);
        setSearchParams({ sort: columnKey, order: direction });
    };
}
