import {TodoListItemResponse} from "../../../../service/todos/types.ts";
import {Link, useNavigate} from "react-router-dom";


function TodoItem({
    todoItem
                  }:{todoItem: TodoListItemResponse}) {
    return (
        <Link
            to={`/todo/${todoItem.id}`}
            className={"todo-item-container"}
        >
            <h4>{todoItem.title}</h4>
            <p>{todoItem.content}</p>
            </Link>
    );
}

export default TodoItem;
