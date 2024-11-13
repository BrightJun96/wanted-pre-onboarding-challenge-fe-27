import {SortColumn} from "react-data-grid";
import {useSearchParams} from "react-router-dom";
import {formatDate} from "../../../../helper/date.ts";
import {useQueryTodos} from "../../../../service/todos/query.todos.ts";
import {Direction, PriorityToKOEnum} from "../../../../type/feature/todo/types.ts";
import CustomTable, {TableColumn} from "../../../table/customTable.tsx";

// 할일 목록 테이블
function TodoListTable() {


    const {data:todoList} =useQueryTodos()
    const [_,setSearchParams] = useSearchParams()




    /**
     * @todo 추후에 다른 테이블 UI에 대한 다른 컬럼이 만들어질 수 있으니 테이블 컬럼을 만드는 함수 만들기
     *
     */
    const columns:TableColumn[] = [
        { key: 'title', name: '제목' },
        { key: 'content', name: '내용' },
        { key: 'priority', name: '우선순위' ,sortable:true},
        { key: 'createdAt', name: '생성일',sortable:true },
        { key: 'updatedAt', name: '수정일',sortable:true }
    ]

    /**
     * @todo rows를 계산해주는 레이어를 API 호출단계에서 분리해주기
     */
    const rows = todoList?todoList.map((todoItem) => ({
        id: todoItem.id,
        title: todoItem.title,
        content: todoItem.content,
        priority: PriorityToKOEnum[todoItem.priority],
        createdAt: formatDate(new Date(todoItem.createdAt)),
        updatedAt: formatDate(new Date(todoItem.createdAt))
    })):[]



    function handleSortChange(sortColumns:SortColumn[]) {

        const { columnKey, direction } = sortColumns[0];

        setSearchParams({sort:columnKey,order:Direction[direction]})

    }
    return (
        <CustomTable
            columns={columns}
            rows={rows}
            handleSortChange={handleSortChange}
        />
    );
}

export default TodoListTable;
