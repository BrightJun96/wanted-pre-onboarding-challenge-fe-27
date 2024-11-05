import  {useEffect} from 'react';
import {fetchGetTodos} from "../../service/todos/api.todos.ts";

function Todo() {

    useEffect(() => {
        fetchGetTodos();
    }, []);
    return (
        <div></div>
    );
}

export default Todo;
