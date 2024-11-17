import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import useQueryString from "../../helper/useQueryString.ts";
import {todoApiService} from "./api.todos.ts";
import {TODOQueryKey} from "./query.key.ts";
import {TodoListProcessResponse} from "./response/TodoListProcessResponse.ts";
import {EditTodoRequest, TodoListRequest} from "./types.ts";

const {
    getTodos : fetchGetTodos,
    getTodoById:fetchGetTodoById ,
    createTodo:fetchCreateTodo,
    updateTodo:fetchUpdateTodo,
    deleteTodo:fetchDeleteTodo
} = todoApiService
// 할일 목록
export function useQueryTodos() : UseQueryResult<TodoListProcessResponse[], Error>{

    const {getQueryParams} =useQueryString()

    const defaultRequestParams: TodoListRequest = {
        priorityFilter: undefined,
        sort: undefined,
        keyword: undefined,
        order: undefined,
    };

    const todoListRequest = getQueryParams(defaultRequestParams);

    return useQuery<TodoListProcessResponse[], Error>({
        queryKey: [TODOQueryKey.list, {...todoListRequest}],
        queryFn: () => fetchGetTodos(todoListRequest),
        select: (data) => data ?? []
    })

}

// 할일 상세 조회
export function useQueryTodoDetails(detailsId:string) {

    return  useQuery({
        queryKey: [TODOQueryKey.detail,detailsId],
        queryFn: ()=>fetchGetTodoById(detailsId),
    })

}


// 할일 추가
export function useMutationAddTodo() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: fetchCreateTodo,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: [TODOQueryKey.list] })
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
            queryClient.invalidateQueries({ queryKey: [TODOQueryKey.list] })
            queryClient.invalidateQueries({ queryKey: [TODOQueryKey.detail,variables.id] })

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
