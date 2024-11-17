import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {PriorityOptions,} from "../../../../constant/feature/todo/constant.ts";
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
 * @todo 등록,상세 분리 필요 현재 등록,상세 로직들이 의도에 맞지 않게 섞여있어 SRP에 위반
 * 에러,로딩시 처리 필요
 * 페이지 로딩시,데이터 호출 > 현재는 페이지를 다 불러오고 데이더 호출 이또한 react-router-dom loader활용
 * 에러 났을 때도 router에서 해결가능
 * defer??
 * zod 추천
 */
function TodoDetailsForm() {

const {todoForm,handleFormChange,setTodoForm,ButtonDisabledCondition}=useTodoForm()


    const {mutate:updateToDo} =useMutationUpdateTodo()
    const {mutate:deleteToDo} =useMutationDeleteTodo()


    const params = useParams()
    if(!params.id){
        return <div>존재하지 않는 상세페이지입니다</div>
    }

    const {data:todoDetails}=useQueryTodoDetails(params.id)

    // 폼 제출
    async function handleFormSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {

        event.preventDefault();

        if (params.id) {
            updateToDo({id: params.id, editTodoRequest: todoForm})
        }


    }


    useEffect(() => {


        if(params.id&&todoDetails){
            setTodoForm({
                title: todoDetails.title,
                content: todoDetails.content,
                priority: todoDetails.priority
            })

        }
    }, [params.id,todoDetails]);

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
                    onClick={() => {
                        if (params.id) {
                            deleteToDo(params.id)
                        }
                    }}
                />
            </form>
    );
}

export default TodoDetailsForm;
