
import networkInstance from "../network.instance.ts";
import {TODOS} from "../domainPath.ts";
import {AddTodoRequest, EditTodoRequest} from "./types.ts";

// 할일 목록 조회
export async function fetchGetTodos(){
    return networkInstance(`${TODOS}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        auth: true,
    })
}

// 할일 단일 조회
export async function fetchGetTodoById(id:number){
    return networkInstance(`${TODOS}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        auth: true,
    })
}

// 할일 추가
export async function fetchCreateTodo(addTodoRequest:AddTodoRequest){
    return networkInstance(`${TODOS}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addTodoRequest),
        auth: true,
    })
}

// 할일 수정
export async function fetchUpdateTodo(id:number,editTodoRequest:EditTodoRequest){
    return networkInstance(`${TODOS}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editTodoRequest),
        auth: true,
    })
}

// 할일 삭제
export async function fetchDeleteTodo(id:number){
    return networkInstance(`${TODOS}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        auth: true,
    })
}
