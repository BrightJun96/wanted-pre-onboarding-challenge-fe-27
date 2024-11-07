// 공통 TODO 요청 타입 정의(등록,수정)
export interface CommonTodoRequest{
    title: string; // 할일 제목
    content: string; // 할일 내용
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
    createdAt?: string; // 할일 생성일
    updatedAt?: string; // 할일 수정일

}
