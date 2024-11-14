// 할일 생성 서비스 인터페이스
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

export interface ReadTodoService<TListRequest,TListResponse>{
    getTodos(request:TListRequest): Promise<TListResponse>
    getTodoById(id:string): Promise<TListResponse>
}
