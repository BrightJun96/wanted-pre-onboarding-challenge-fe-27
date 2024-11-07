import React from 'react';
import {useNavigate} from "react-router-dom";

/**
 * 할일 추가 버튼
 * @param props
 * @constructor
 */
function TodoAddButton() {
    const navigate = useNavigate();
    function handleRegisterTodo() {
        navigate("/todo/register");
    }
    return (
        <button
        className={"custom-button todo-add-button"}
        onClick={handleRegisterTodo}
        >
            할일 추가
        </button>
    );
}

export default TodoAddButton;
