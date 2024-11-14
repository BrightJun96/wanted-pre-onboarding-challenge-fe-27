import {PriorityToKOEnum} from "../../../type/feature/todo/types.ts";
import {TodoListItemResponse} from "../types.ts";

// API 응답받은 데이터를 클라이언트에서 원하는 방식으로 가공
export class TodoListProcessResponse{
    private todoItem:TodoListItemResponse

    constructor(todoItem:TodoListItemResponse){
        this.todoItem = todoItem
    }
    // 할일 아이디
    get id(){
        return this.todoItem.id
    }

    // 할일 제목
    get title(){
        return this.todoItem.title
    }

    // 할일 내용
    get content(){
        return this.todoItem.content
    }

    // 우선 순위 영어 => 한글로 변환
    get priority(){
        return PriorityToKOEnum[this.todoItem.priority]
    }

    // 생성일 포맷팅
    get createdAt(){
        return new Date(this.todoItem.createdAt).toLocaleDateString()
    }

    // 수정일 포맷팅
    get updatedAt(){
        return new Date(this.todoItem.updatedAt).toLocaleDateString()
    }

}
