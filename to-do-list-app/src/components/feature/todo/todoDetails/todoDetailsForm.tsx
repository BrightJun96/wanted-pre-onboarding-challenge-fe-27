import React, {useContext, useEffect, useState} from 'react';
import CustomInput from "../../../input/customInput.tsx";
import CustomButton from "../../../button/customButton.tsx";
import {
    fetchCreateTodo, fetchDeleteTodo,
    fetchGetTodoById,
    fetchUpdateTodo
} from "../../../../service/todos/api.todos.ts";
import {TODO_PAGE_ENUM, TODO_PAGE_TYPE} from "../../../../constant/feature/todo/constant.ts";
import {useParams} from "react-router-dom";
import {TodoListNetworkUpdateContext} from "../../../../context/todo/todoContext.ts";

interface TodoFormInterface {
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


   const networkFetchGetTodos= useContext(TodoListNetworkUpdateContext)

    const params = useParams()

    // 상세 페이지 여부
    const IsDetailsPage = TODO_PAGE_ENUM.UPDATE



    // 할일 등록 네트워크 요청
    async function networkAddTodo() {
       const response =  await fetchCreateTodo(todoForm)
        if(response.ok){
            // 할일 목록 갱신
            await networkFetchGetTodos()
        }
    }
    // 할일 수정 네트워크 요청
    async function networkUpdateTodo(detailsId: string) {
        const response = await fetchUpdateTodo(detailsId, todoForm)
        if (response.ok) {
            // 할일 목록 갱신
            await networkFetchGetTodos()

        }
    }

    // 할일 삭제 네트워크 요청
    async function networkDeleteTodo(detailsId: string|undefined) {
        if(detailsId) {
            const response = await fetchDeleteTodo(detailsId)
            if(response.ok) {
                // 할일 목록 갱신
                await networkFetchGetTodos()
            }
        }
        else{
            window.alert("상세 ID가 없습니다.")
        }
    }

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
        if(pageType === IsDetailsPage && params.id){
            await networkUpdateTodo(params.id)
        }else{
            await networkAddTodo();
        }

    }

    // 버튼 비활성화 조건
    const ButtonDisabledCondition = todoForm.title === "" || todoForm.content === "";
    // 버튼 라벨
    const ButtonLabel = pageType===IsDetailsPage? "수정":"등록"

    useEffect(() => {
        async function networkFetchGetTodo(detailsId: string) {
            const data = await fetchGetTodoById(detailsId)


                setTodoForm({
                    title: data.data.title,
                    content: data.data.content
                })

        }

        if((pageType===IsDetailsPage)&&params.id){
            networkFetchGetTodo(params.id)

        }
    }, [params.id]);

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
                {/*삭제*/}
                <CustomButton
                    label={"삭제"}
                    onClick={() => networkDeleteTodo(params.id)}/>
            </form>
        </div>
    );
}

export default TodoDetailsForm;
