
import {API_URL} from "../api.instance.ts";
import {TODOS} from "../domainPath.ts";
import {AddTodoRequest, EditTodoRequest} from "./types.ts";

// 할일 목록 조회
export async function fetchGetTodos(){
    return fetch(`${API_URL}/${TODOS}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
}

// 할일 단일 조회
export async function fetchGetTodoById(id:number){
    return fetch(`${API_URL}/${TODOS}/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
}

// 할일 추가
export async function fetchCreateTodo(addTodoRequest:AddTodoRequest){
    return fetch(`${API_URL}/${TODOS}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(addTodoRequest),
    })
}

// 할일 수정
export async function fetchUpdateTodo(id:number,editTodoRequest:EditTodoRequest){
    return fetch(`${API_URL}/${TODOS}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(editTodoRequest),
    })
}

// 할일 삭제
export async function fetchDeleteTodo(id:number){
    return fetch(`${API_URL}/${TODOS}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
}
