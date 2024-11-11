export type TODO_PAGE_TYPE = TODO_PAGE_ENUM.REGISTER | TODO_PAGE_ENUM.UPDATE;

export enum TODO_PAGE_ENUM{
    REGISTER = "REGISTER",
    UPDATE = "UPDATE"
}


// 우선순위 타입
export type PriorityType = "urgent" | "normal" | "low";
