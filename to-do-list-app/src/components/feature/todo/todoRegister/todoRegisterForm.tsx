import React from "react";
import {PriorityOptions} from "../../../../constant/feature/todo/constant.ts";
import useTodoForm from "../../../../helper/todo/useTodoForm.ts";
import {useMutationAddTodo} from "../../../../service/todos/query.todos.ts";
import CustomButton from "../../../button/customButton.tsx";
import CustomInput from "../../../input/customInput.tsx";
import CustomRadio from "../../../radio/customRadio.tsx";


function TodoRegisterForm() {
    const { todoForm, handleFormChange,ButtonDisabledCondition } = useTodoForm();

    const {mutate:addToDo} =useMutationAddTodo()

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
         addToDo(todoForm);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CustomInput
                label="제목"
                value={todoForm.title}
                onChange={(value) => handleFormChange("title", value)}
                inputType={"text"}
            />
            <CustomInput
                label="내용"
                value={todoForm.content}
                onChange={(value) => handleFormChange("content", value)}
                inputType={"text"}
            />
            <CustomRadio
                label="우선순위"
                value={todoForm.priority}
                options={PriorityOptions}
                onChange={(value) => handleFormChange("priority", value)}
            />
            <CustomButton
                disabled={ButtonDisabledCondition}
                type="submit"
                label="등록" />
        </form>
    );
}

export default TodoRegisterForm;
