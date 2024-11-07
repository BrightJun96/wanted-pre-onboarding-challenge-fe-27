import TodoItem from "./todoItem.tsx";
import TodoAddButton from "./todoAddButton.tsx";

function TodoList() {
    return (
        <div className={"todo-list-container"}>
            <TodoAddButton/>
            <TodoItem/>
            <TodoItem/>
            <TodoItem/>

        </div>
    );
}

export default TodoList;
