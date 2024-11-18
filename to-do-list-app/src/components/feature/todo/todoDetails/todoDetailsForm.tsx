import React from 'react';
import {PriorityOptions,} from "../../../../constant/feature/todo/constant.ts";
import useTodoDetailsDataMapping from "../../../../helper/todo/useTodoDetailsDataMapping.ts";
import useTodoForm from "../../../../helper/todo/useTodoForm.ts";
import {
    useMutationDeleteTodo,
    useMutationUpdateTodo,
    useQueryTodoDetails
} from "../../../../service/todos/query.todos.ts";
import {PriorityType} from "../../../../type/feature/todo/types.ts";
import CustomButton from "../../../button/customButton.tsx";
import CustomInput from "../../../input/customInput.tsx";
import CustomRadio from "../../../radio/customRadio.tsx";

export interface TodoFormInterface {
    title: string;
    content: string;
    priority: PriorityType;
}


/**
 * 페이지 로딩시,데이터 호출 > 현재는 페이지를 다 불러오고 데이더 호출 이또한 react-router-dom loader활용
 * 에러 났을 때도 router에서 해결가능
 * defer??
 * zod 추천
 */
function TodoDetailsForm({detailsId}:{detailsId:string}) {

    const {todoForm,handleFormChange,setTodoForm,ButtonDisabledCondition}=useTodoForm()

    const {mutate:updateToDo} =useMutationUpdateTodo()
    const {mutate:deleteToDo} =useMutationDeleteTodo()
    const {data:todoDetails}=useQueryTodoDetails(detailsId)

    // 폼 제출
    async function handleFormSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
            event.preventDefault();
            updateToDo({id: detailsId, editTodoRequest: todoForm})

    }

    // 삭제
    function handleDelete() {
            deleteToDo(detailsId)
    }

    // 상세 데이터 매핑
    useTodoDetailsDataMapping({
        todoDetails,
        setTodoForm
    })


    return (
            <form
                className={"todo-details-form-container"}
            onSubmit={handleFormSubmit}
            >
                {/*제목*/}
                <CustomInput
                    label={"제목"}
                    value={todoForm.title}
                    onChange={(value) => handleFormChange("title",value)}
                    inputType={"text"}/>
                {/*내용 */}
                <CustomInput
                    label={"내용"}
                    value={todoForm.content}
                    onChange={(value) => handleFormChange("content",value)}
                    inputType={"text"}/>
                {/*우선순위*/}
                <CustomRadio
                    value={todoForm.priority}
                    onChange={(value) => handleFormChange("priority",value)}
                    label={"우선순위"}
                    options={PriorityOptions}
                />

                <CustomButton
                    type={"submit"}
                    disabled={ButtonDisabledCondition}
                    label={"수정"} />
               <CustomButton
                    label={"삭제"}
                    onClick={handleDelete}
                />
            </form>
    );
}

export default TodoDetailsForm;
