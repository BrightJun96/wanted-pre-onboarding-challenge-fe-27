import {TodoListProcessResponse} from "./response/TodoListProcessResponse.ts";
import {AddTodoRequest, EditTodoRequest, TodoListItemResponse, TodoListRequest} from "./types.ts";

// 할일 등록 서비스 인터페이스
export interface CreateTodoService<TAddRequest>{
    createTodo(request:TAddRequest) : Promise<Response>
}

// 할일 수정 서비스 인터페이스
export interface UpdateTodoService<TEditRequest>{
    updateTodo(id:string,request:TEditRequest): Promise<Response>
}

// 할일 삭제 서비스 인터페이스
export interface DeleteTodoService{
    deleteTodo(id:string): Promise<Response>
}

// 할일 목록 조회 서비스 인터페이스
export interface ReadTodoListService<TListRequest,TListResponse>{
    getTodos(request:TListRequest): Promise<TListResponse[]>
}

// 할일 상세 조회 서비스 인터페이스
export interface ReadTodoDetailService<TItemResponse>{
    getTodoById(id:string): Promise<TItemResponse>
}


// 할일 인터페이스 구현한  CRUD 서비스 인터페이스
export interface CRUDTodoService extends ReadTodoListService<TodoListRequest, TodoListProcessResponse>,ReadTodoDetailService<TodoListItemResponse>,CreateTodoService<AddTodoRequest>,UpdateTodoService<EditTodoRequest>,DeleteTodoService{}
