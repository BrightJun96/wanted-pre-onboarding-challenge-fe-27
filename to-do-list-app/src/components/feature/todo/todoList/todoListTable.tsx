import {columns} from "../../../../constant/feature/todo/constant.ts";
import {useQueryTodos} from "../../../../service/todos/query.todos.ts";
import ErrorMessage from "../../../error/errorMessage.tsx";
import CustomTable from "../../../table/customTable.tsx";
import {useSortHandler} from "../../../table/sort/useSortHandler.ts";

// 할일 목록 테이블
function TodoListTable() {

    const {data:todoList=[],isError,isLoading} =useQueryTodos()
    const handleSortChange = useSortHandler();

    if(isLoading){
        return <p>로딩중...</p>
    }
     if (isError){
        return <ErrorMessage/>
    }

    return (
      <CustomTable
            columns={columns}
            rows={todoList}
            handleSortChange={handleSortChange}
        />
    );
}

export default TodoListTable;
