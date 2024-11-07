import React, { useEffect, useState} from 'react';
import CustomInput from "../../../input/customInput.tsx";
import CustomButton from "../../../button/customButton.tsx";
import {TODO_PAGE_ENUM, TODO_PAGE_TYPE} from "../../../../constant/feature/todo/constant.ts";
import {useParams} from "react-router-dom";
import useTodoNetwork from "../../../../helper/todo/useTodoNetwork.ts";
import {useQueryTodoDetails} from "../../../../service/todos/query.todos.ts";

export interface TodoFormInterface {
    title: string;
    content: string;
}

interface TodoDetailsFormProps {
    pageType:TODO_PAGE_TYPE
}

function TodoDetailsForm({
                                pageType
                         }:TodoDetailsFormProps) {

    // 할일 등록 폼
    const [todoForm, setTodoForm] = useState<TodoFormInterface>({
        title: "",
        content: ""
    })


const {
    addToDo:networkAddTodo,
    updateToDo:networkUpdateTodo,
    deleteToDo:networkDeleteTodo
} =useTodoNetwork()


    const params = useParams()
    const {data:todoDetails}=useQueryTodoDetails(params.id??"")


    const IsDetailsPage = pageType === TODO_PAGE_ENUM.UPDATE


    // 폼 변경
    function handleFormChange( key: keyof TodoFormInterface,value: string) {
        setTodoForm({
            ...todoForm,
            [key]: value
        })
    }

    // 폼 제출
    async function handleFormSubmit(
        event: React.FormEvent<HTMLFormElement>
    ) {
        event.preventDefault();
        // 등록, 수정 분기 처리
        if(pageType === TODO_PAGE_ENUM.UPDATE && params.id){
             networkUpdateTodo({id:params.id,editTodoRequest:todoForm})
        }else{
             networkAddTodo(todoForm);
        }

    }

    // 버튼 비활성화 조건
    const ButtonDisabledCondition = todoForm.title === "" || todoForm.content === "";
    // 버튼 라벨
    const ButtonLabel = IsDetailsPage? "수정":"등록"

    useEffect(() => {


        if((IsDetailsPage)&&params.id&&todoDetails){
            setTodoForm({
                title: todoDetails.title,
                content: todoDetails.content
            })

        }
    }, [params.id,todoDetails]);

    return (
        <div className={"todo-details-container"}>
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
                {/*등록,수정*/}
                <CustomButton
                    type={"submit"}
                    disabled={ButtonDisabledCondition}
                    label={ButtonLabel} />
                {/*삭제(상세 페이지의 경우만)*/}
                {IsDetailsPage&&<CustomButton
                    label={"삭제"}
                    onClick={() => {
                        if (params.id) {
                            networkDeleteTodo(params.id)
                        }
                    }}
                />}
            </form>
        </div>
    );
}

export default TodoDetailsForm;
