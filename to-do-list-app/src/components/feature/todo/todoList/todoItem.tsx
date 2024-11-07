import React from 'react';
import {TodoListItemResponse} from "../../../../service/todos/types.ts";
import {Link, useNavigate} from "react-router-dom";


function TodoItem({
    todoItem
                  }:{todoItem: TodoListItemResponse}) {

    const navigate = useNavigate()
    function handleTodoItemClick() {
        navigate(`/todo/${todoItem.id}`)
    }
    return (
        // 감싸는 태그를 Link,Button,div 어떤것으로 하면 좋을지?
        <button
        className={"todo-item-container"}
        onClick={handleTodoItemClick}
        >
            <h4>{todoItem.title}</h4>
            <p>{todoItem.content}</p>
            </button>
    );
}

export default TodoItem;
