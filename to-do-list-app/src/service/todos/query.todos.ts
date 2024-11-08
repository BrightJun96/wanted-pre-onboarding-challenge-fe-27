import {fetchCreateTodo, fetchDeleteTodo, fetchGetTodoById, fetchGetTodos, fetchUpdateTodo} from "./api.todos.ts";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {EditTodoRequest, TodoListItemResponse} from "./types.ts";

// 할일 목록
export function useQueryTodos() {
    return  useQuery<TodoListItemResponse[]>({
        queryKey: ["todos"],
        queryFn: fetchGetTodos,
    })

}

// 할일 상세 조회
export function useQueryTodoDetails(detailsId:string) {
    return  useQuery({
        queryKey: ["todo",detailsId],
        queryFn: ()=>fetchGetTodoById(detailsId),
        enabled: !!detailsId
    })

}


// 할일 추가
export function useMutationAddTodo() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: fetchCreateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })
}

// 할일 수정
export function useMutationUpdateTodo() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: (variables:{
            id:string,
            editTodoRequest:EditTodoRequest
        })=>fetchUpdateTodo(variables.id,variables.editTodoRequest),
        onSuccess: (_,variables) => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
            queryClient.invalidateQueries({ queryKey: ['todo',variables.id] })

        },
    })
}

// 할일 삭제
export function useMutationDeleteTodo() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: fetchDeleteTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })
}
