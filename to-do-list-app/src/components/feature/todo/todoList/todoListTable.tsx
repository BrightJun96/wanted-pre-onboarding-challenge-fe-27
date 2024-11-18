import {CellClickArgs} from "react-data-grid";
import {useNavigate} from "react-router-dom";
import {columns} from "../../../../constant/feature/todo/constant.ts";
import useNavigateToFirstItem from "../../../../helper/useNavigateToFirstItem.ts";
import {useQueryTodos} from "../../../../service/todos/query.todos.ts";
import {TodoListProcessResponse} from "../../../../service/todos/response/TodoListProcessResponse.ts";
import Fetcher from "../../../fetcher/fetcher.tsx";
import CustomTable, {TableRow} from "../../../table/customTable.tsx";
import {useSortHandler} from "../../../table/sort/useSortHandler.ts";

// 할일 목록 테이블
function TodoListTable() {

    const handleSortChange = useSortHandler();

   const {data:todoList=[]} =  useQueryTodos()

   const navigate =  useNavigate()

    // 셀 클릭
    function handleCellClick(params:CellClickArgs<TableRow>){
        navigate(`/todo/${params.row.id}`)
   }

    // 첫 번째 항목으로 이동
   useNavigateToFirstItem<TodoListProcessResponse>({
         items:todoList,
         getId:(item)=>item.id,
         generatePath:(id)=>`/todo/${id}`
   })

    return (
        <Fetcher query={useQueryTodos} >
          <CustomTable
                rows={todoList}
                columns={columns}
                handleSortChange={handleSortChange}
                handleCellClick={handleCellClick}
            />
        </Fetcher>
    );
}

export default TodoListTable;
