import {TODOS} from "../domainPath.ts";
import networkInstance from "../network.instance.ts";
import {AddTodoRequest, EditTodoRequest, TodoListRequest} from "./types.ts";

// 할일 목록 조회
export async function fetchGetTodos(todoListRequest:TodoListRequest){

    const queryString = Object.fromEntries(
        Object.entries({
            priority: todoListRequest.priority,
            sort: todoListRequest.sort,
            keyword: todoListRequest.keyword,
            order: todoListRequest.order,
        }).filter(([_, v]) => v !== undefined)
    )as Record<string, string>;
    const response =  await networkInstance(`${TODOS}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        queryString,
        auth: true,
    })

    if(response.ok){
        const result =  await response.json()
        return result.data
    }else {
        window.alert("할일 목록을 불러오는데 실패했습니다.")
    }
}

// 할일 단일 조회
export async function fetchGetTodoById(id:string){
    const response = await networkInstance(`${TODOS}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        auth: true,
    })

    if(response.ok){
        const result =  await response.json()
        return result.data
    }else{
        window.alert("할일을 불러오는데 실패했습니다.")
    }
}

// 할일 추가
export async function fetchCreateTodo(addTodoRequest:AddTodoRequest){
    const response = await  networkInstance(`${TODOS}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addTodoRequest),
        auth: true,
    })

    if(response.ok) {
        window.alert("할일이 추가되었습니다.")
    }
    else {
        window.alert("할일 추가에 실패했습니다.")
    }

    return response
}

// 할일 수정
export async function fetchUpdateTodo(id:string,editTodoRequest:EditTodoRequest){
    const response =  await networkInstance(`${TODOS}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editTodoRequest),
        auth: true,
    })
    if (response.ok) {
        window.alert("할일이 수정되었습니다.")

    } else {
        window.alert("할일 수정에 실패했습니다.")
    }

    return response
}

// 할일 삭제
export async function fetchDeleteTodo(id:string){
    const response = await networkInstance(`${TODOS}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        auth: true,
    })

    if(response.ok){
        window.alert("할일이 삭제되었습니다.")

    }else{
        window.alert("할일 삭제에 실패했습니다.")
    }
    return response
}
