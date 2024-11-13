import {Outlet} from "react-router-dom";
import TodoList from "../../components/feature/todo/todoList/todoList.tsx";
import "../../css/index.css"
import "../../css/todo/todo.css"
import {FLEX_ROW_CONTAINER_CLASSNAME} from "../../constant/css/constant.ts";

function Todo() {

    return (
        <div
        className={`${FLEX_ROW_CONTAINER_CLASSNAME} todo-page-container`}
        >
            {/*할일 목록*/}
            <TodoList/>
            <Outlet/>
        </div>
    );
}

export default Todo;
