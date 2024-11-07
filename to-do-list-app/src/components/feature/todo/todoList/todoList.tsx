import TodoItem from "./todoItem.tsx";
import TodoAddButton from "./todoAddButton.tsx";
import {useEffect, useState} from "react";
import {fetchGetTodos} from "../../../../service/todos/api.todos.ts";
import {TodoListItemResponse} from "../../../../service/todos/types.ts";
import {useNavigate} from "react-router-dom";

function TodoList() {

    const [todoList, setTodoList] = useState<TodoListItemResponse[]>([]);
    const navigate = useNavigate()

    console.log("todoList",todoList)
    useEffect(() => {

        async function networkFetchGetTodos() {
            const response = await fetchGetTodos();
            const data = await response.json()

            if(response.ok){
                setTodoList(data.data)
                if(data.data.length>0) {
                    navigate(`/todo/${data.data[0].id}`)
                }
            }else {
                window.alert("할일 목록을 불러오는데 실패했습니다.")
            }
        }


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
