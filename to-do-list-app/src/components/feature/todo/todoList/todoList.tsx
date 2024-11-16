import TodoAddButton from "./todoAddButton.tsx";
import TodoFilter from "./todoFilter.tsx";
import TodoListTable from "./todoListTable.tsx";
import TodoSearch from "./todoSearch.tsx";

// 할일 목록 컴포넌트
function TodoList() {

    return (
            <div className={"todo-list-container"}>
                {/*검색*/}
                <TodoSearch/>
                {/*할일 추가 버튼*/}
                <TodoAddButton/>
                {/*목록 필터*/}
                <TodoFilter/>
                {/*할일 목록*/}
                <TodoListTable/>
            </div>
    );
}

export default TodoList;
