import {TODOS} from "../domainPath.ts";
import networkInstance from "../network.instance.ts";
import {IResponse} from "../network.types.ts";
import {CRUDTodoService} from "./interface.todos.ts";
import {TodoListProcessResponse} from "./response/TodoListProcessResponse.ts";
import {AddTodoRequest, EditTodoRequest, TodoListItemResponse, TodoListRequest} from "./types.ts";

export class TodoApiService implements CRUDTodoService {


    // 할일 목록 조회
    async getTodos(request: TodoListRequest): Promise<TodoListProcessResponse[]|null> {
        const queryString = Object.fromEntries(
            Object.entries({
                priorityFilter: request.priorityFilter,
                sort: request.sort,
                order: request.order,
                keyword: request.keyword,
            }).filter(([_, v]) => v !== undefined)
        ) as Record<string, string>;

        const response = await networkInstance(`${TODOS}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            queryString,
            auth: true,
        });


        if (response.ok) {
            const result:IResponse<TodoListItemResponse[]> = await response.json();
            return result.data.map((item) => new TodoListProcessResponse(item));
        } else {
            window.alert("할일 목록을 불러오는데 실패했습니다.");
            return null;
        }
    }

    // 할일 단일 조회
    async getTodoById(id: string): Promise<any> {
        const response = await networkInstance(`${TODOS}/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            auth: true,
        });

        if (response.ok) {
            const result = await response.json();
            return result.data;
        } else {
            window.alert("할일을 불러오는데 실패했습니다.");
            return null;
        }
    }

    // 할일 추가
    async createTodo(request: AddTodoRequest): Promise<Response> {
        const response = await networkInstance(`${TODOS}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
            auth: true,
        });

        if (response.ok) {
            window.alert("할일이 추가되었습니다.");
        } else {
            window.alert("할일 추가에 실패했습니다.");
        }

        return response;
    }

    // 할일 수정
    async updateTodo(id: string, request: EditTodoRequest): Promise<Response> {
        const response = await networkInstance(`${TODOS}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(request),
            auth: true,
        });

        if (response.ok) {
            window.alert("할일이 수정되었습니다.");
        } else {
            window.alert("할일 수정에 실패했습니다.");
        }

        return response;
    }

    // 할일 삭제
    async deleteTodo(id: string): Promise<Response> {
        const response = await networkInstance(`${TODOS}/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            auth: true,
        });

        if (response.ok) {
            window.alert("할일이 삭제되었습니다.");
        } else {
            window.alert("할일 삭제에 실패했습니다.");
        }

        return response;
    }
}


export const todoApiService = new TodoApiService();
