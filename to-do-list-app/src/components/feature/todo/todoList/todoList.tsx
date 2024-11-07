import TodoItem from "./todoItem.tsx";
import TodoAddButton from "./todoAddButton.tsx";
import {useEffect} from "react";
import {TodoListItemResponse} from "../../../../service/todos/types.ts";

function TodoList({
    todoList,
    networkFetchGetTodos
                  }:{
    todoList:TodoListItemResponse[],
    networkFetchGetTodos:()=>void
}) {


    useEffect(() => {



        networkFetchGetTodos();
    }, []);


    return (
        <div className={"todo-list-container"}>
            <TodoAddButton/>
            {todoList.map((todoItem) =>
                <TodoItem key={todoItem.id} todoItem={todoItem}
            />)}


        </div>
    );
}

export default TodoList;
