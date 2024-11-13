import {SortColumn, SortDirection} from "react-data-grid";

// 정렬 로직 추출
// @todo 이 함수는 리액트에 종속적이지는 않는가?
export function createSortParams(sortColumns: SortColumn[]): { columnKey: string, direction: SortDirection } {
    const { columnKey, direction } = sortColumns[0];
    return { columnKey, direction };
}
