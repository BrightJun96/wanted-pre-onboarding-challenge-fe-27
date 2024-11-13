import Search from "../../../search/search.tsx";
import Filter from "./filter/filter.tsx";
import TodoAddButton from "./todoAddButton.tsx";
import TodoListTable from "./todoListTable.tsx";

function TodoList() {

    return (
            <div className={"todo-list-container"}>
                {/*검색*/}
                <Search/>
                {/*할일 추가 버튼*/}
                <TodoAddButton/>
                {/*목록 필터*/}
                <Filter/>
                {/*할일 목록*/}
                <TodoListTable/>
            </div>
    );
}

export default TodoList;
