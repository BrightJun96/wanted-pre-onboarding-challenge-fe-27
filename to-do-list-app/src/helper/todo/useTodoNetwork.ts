import {useMutationAddTodo, useMutationDeleteTodo, useMutationUpdateTodo} from "../../service/todos/query.todos.ts";

/**
 * 할일 목록 API 호출 커스텀 훅
 */
function useTodoNetwork() {



    const {mutate:addToDo} =useMutationAddTodo()
    const {mutate:updateToDo} =useMutationUpdateTodo()
    const {mutate:deleteToDo} =useMutationDeleteTodo()


    // 할일 수정 네트워크 요
    return {
        addToDo,updateToDo,deleteToDo
    }
}

export default useTodoNetwork;
