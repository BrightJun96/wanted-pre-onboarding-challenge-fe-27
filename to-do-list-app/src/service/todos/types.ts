// 공통 TODO 요청 타입 정의(등록,수정)
import {PriorityType} from "../../type/feature/todo/types.ts";

export interface CommonTodoRequest{
    title: string; // 할일 제목
    content: string; // 할일 내용
    priority: PriorityType; // 할일 중요도
}

// 할일 등록 요청 타입
export interface AddTodoRequest extends CommonTodoRequest{

}

// 할일 수정 요청 타입
export interface EditTodoRequest extends CommonTodoRequest{

}

// 할일 목록 아이템 응답 타입
export interface TodoListItemResponse {
    id: string; // 할일 아이디
    title: string; // 할일 제목
    content: string; // 할일 내용
    priority: PriorityType; // 할일 중요도
    createdAt: string; // 할일 생성일
    updatedAt: string; // 할일 수정일

}

// 할일 목록 요청 타입 순서
export type TodoListRequestOrder = "createdAt" | "updatedAt" | "priority";
// 할일 목록 요청 타입
export interface TodoListRequest {
    priorityFilter?:string//PriorityType; // 중요도
    sort?:  string //TodoListRequestOrder // 정렬
    keyword?: string; // 검색어
    order?: string //"asc" | "desc" // 정렬 기준
}
