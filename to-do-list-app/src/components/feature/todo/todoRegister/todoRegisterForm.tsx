import useTodoForm from "../../../../helper/todo/useTodoForm.ts";
import {useMutationAddTodo} from "../../../../service/todos/query.todos.ts";
import AbstractForm, {AbstractButtonType} from "../../../form/abstractForm.tsx";

// 할일 등록 폼
function TodoRegisterForm() {
    const { todoForm, ButtonDisabledCondition,fields } = useTodoForm();

    const {mutate:addToDo,isPending} =useMutationAddTodo()
    const buttons:AbstractButtonType[] =[
        {
            type: "submit",
            disabled:isPending|| ButtonDisabledCondition,
            label:isPending? "등록중..":"등록",
        }
    ]
    return (
        <AbstractForm
            className={"todo-details-form-container"}
            onSubmit={() => addToDo(todoForm)}
        >
            <AbstractForm.Fields fields={fields}/>
            <AbstractForm.Buttons buttons={buttons}/>
        </AbstractForm>
    );
}

export default TodoRegisterForm;
