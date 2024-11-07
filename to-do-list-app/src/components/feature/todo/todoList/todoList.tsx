import TodoItem from "./todoItem.tsx";
import TodoAddButton from "./todoAddButton.tsx";
import {useQueryTodos} from "../../../../service/todos/query.todos.ts";

function TodoList() {

    const {data:todoList} =useQueryTodos()




    return (
        <div className={"todo-list-container"}>
            {/*할일 추가 버튼*/}
            <TodoAddButton/>
            {/*할일 목록*/}
            {todoList&&todoList.map((todoItem) =>
                <TodoItem key={todoItem.id} todoItem={todoItem}
            />)}
        </div>
    );
}

export default TodoList;
