
import TodoList from "../../components/feature/todo/todoList/todoList.tsx";
import "../../css/index.css"
import "../../css/todo/todo.css"
import {FLEX_ROW_CONTAINER_CLASSNAME} from "../../constant/css/constant.ts";
import {Outlet, useNavigate} from "react-router-dom";
import {TodoListNetworkUpdateContext} from "../../context/todo/todoContext.ts";
import {fetchGetTodos} from "../../service/todos/api.todos.ts";
import {useState} from "react";
import {TodoListItemResponse} from "../../service/todos/types.ts";
function Todo() {

    const [todoList, setTodoList] = useState<TodoListItemResponse[]>([]);
    const navigate = useNavigate()

    async function networkFetchGetTodos() {
        const data = await fetchGetTodos();

        setTodoList(data.data)
        if(data.data.length>0) {
            navigate(`/todo/${data.data[0].id}`)
        }

    }

    return (
        <TodoListNetworkUpdateContext.Provider value={networkFetchGetTodos}>
        <div
        className={`${FLEX_ROW_CONTAINER_CLASSNAME} todo-page-container`}
        >
            {/*할일 목록*/}
            <TodoList
                todoList={todoList}
                networkFetchGetTodos={networkFetchGetTodos}

            />
            <Outlet/>
        </div>
        </TodoListNetworkUpdateContext.Provider>
    );
}

export default Todo;
