import {useMutation, useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import {useSearchParams} from "react-router-dom";
import {todoApiService} from "./api.todos.ts";
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

    let [searchParams] = useSearchParams();
    let order = searchParams.get("order")??undefined
    let priorityFilter = searchParams.get("priorityFilter")??undefined
    let sort = searchParams.get("sort")??undefined;
    let keyword = searchParams.get("keyword")??undefined;

    const todoListRequest:TodoListRequest = {
        priorityFilter,
        sort,
        keyword,
        order,
    }

    const queryData = useQuery<TodoListProcessResponse[], Error>({
        queryKey: ["todos",{...todoListRequest}],
        queryFn:() =>  fetchGetTodos(todoListRequest),
        select:(data) => data??[]
    })

    // 에러 상태 확인 및 처리
    if (queryData.error) {
        console.error("Error fetching todos:", queryData.error.message);
        alert("할일 목록을 불러오는데 실패했습니다.");
    }

    return queryData

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
