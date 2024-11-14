import {columns} from "../../../../constant/feature/todo/constant.ts";
import {useQueryTodos} from "../../../../service/todos/query.todos.ts";
import Fetcher from "../../../fetcher/fetcher.tsx";
import CustomTable from "../../../table/customTable.tsx";
import {useSortHandler} from "../../../table/sort/useSortHandler.ts";

// 할일 목록 테이블
function TodoListTable() {

    const handleSortChange = useSortHandler();


    return (
        <Fetcher query={useQueryTodos} dataPropName="rows">
          <CustomTable
                columns={columns}
                handleSortChange={handleSortChange}
            />
        </Fetcher>
    );
}

export default TodoListTable;
