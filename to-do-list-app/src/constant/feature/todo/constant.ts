import {RadioOption} from "../../../components/radio/customRadio.tsx";
import {TableColumn} from "../../../components/table/customTable.tsx";

// 우선순위 옵션
export const PriorityOptions:RadioOption[] = [
    {
        label:"높음",
        value:"urgent"
    },
    {
        label:"중간",
        value:"normal"
    },
    {
        label:"낮음",
        value:"low"
    }
]

// 할일 목록 테이블 컬럼
export const columns:TableColumn[] = [
    { key: 'title', name: '제목' },
    { key: 'content', name: '내용' },
    { key: 'priority', name: '우선순위' ,sortable:true},
    { key: 'createdAt', name: '생성일',sortable:true },
    { key: 'updatedAt', name: '수정일',sortable:true }
]

