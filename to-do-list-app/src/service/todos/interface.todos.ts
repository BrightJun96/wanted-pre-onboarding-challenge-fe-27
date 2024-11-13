import {AddTodoRequest, EditTodoRequest, TodoListRequest} from "./types.ts";

export interface TodoService {
    getTodos(request: TodoListRequest): Promise<any>;
    getTodoById(id: string): Promise<any>;
    createTodo(request: AddTodoRequest): Promise<Response>;
    updateTodo(id: string, request: EditTodoRequest): Promise<Response>;
    deleteTodo(id: string): Promise<Response>;
}

