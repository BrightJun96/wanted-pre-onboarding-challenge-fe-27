import {columns} from "../../../../constant/feature/todo/constant.ts";
import {useQueryTodos} from "../../../../service/todos/query.todos.ts";
import CustomTable from "../../../table/customTable.tsx";
import {useSortHandler} from "../../../table/sort/useSortHandler.ts";

// 할일 목록 테이블
function TodoListTable() {


    const {data:todoList} =useQueryTodos()
    const handleSortChange = useSortHandler();



    return (
        <CustomTable
            columns={columns}
            rows={todoList}
            handleSortChange={handleSortChange}
        />
    );
}

export default TodoListTable;
