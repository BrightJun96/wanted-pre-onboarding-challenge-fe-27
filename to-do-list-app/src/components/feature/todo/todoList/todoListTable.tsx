import {columns} from "../../../../constant/feature/todo/constant.ts";
import {useQueryTodos} from "../../../../service/todos/query.todos.ts";
import CustomTable from "../../../table/customTable.tsx";
import {useSortHandler} from "../../../table/sort/useSortHandler.ts";

// 할일 목록 테이블
function TodoListTable() {


    const {data:todoList} =useQueryTodos()
    const handleSortChange = useSortHandler();


    /**
     * @todo rows를 계산해주는 레이어를 API 호출단계에서 분리해주기
     */
    const rows = todoList?todoList:[]




    return (
        <CustomTable
            columns={columns}
            rows={rows}
            handleSortChange={handleSortChange}
        />
    );
}

export default TodoListTable;
