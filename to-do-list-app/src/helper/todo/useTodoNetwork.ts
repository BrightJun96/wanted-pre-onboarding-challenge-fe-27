import {Dispatch, SetStateAction, useContext} from 'react';
import {fetchCreateTodo, fetchDeleteTodo, fetchGetTodoById, fetchUpdateTodo} from "../../service/todos/api.todos.ts";
import {TodoListNetworkUpdateContext} from "../../context/todo/todoContext.ts";
import {TodoFormInterface} from "../../components/feature/todo/todoDetails/todoDetailsForm.tsx";

/**
 * 할일 목록 API 호출 커스텀 훅
 */
function useTodoNetwork(todoForm:TodoFormInterface,setTodoForm:Dispatch<SetStateAction<TodoFormInterface>>) {
    const networkFetchGetTodos= useContext(TodoListNetworkUpdateContext)

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

    // 할일 상세 조회 네트워크 요청
    async function networkFetchGetTodo(detailsId: string) {
        const data = await fetchGetTodoById(detailsId)

        setTodoForm({
            title: data.data.title,
            content: data.data.content
        })

    }
    return {networkDeleteTodo,networkUpdateTodo,networkAddTodo,networkFetchGetTodo}
}

export default useTodoNetwork;
