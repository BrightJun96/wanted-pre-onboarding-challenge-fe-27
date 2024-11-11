export type TODO_PAGE_TYPE = TODO_PAGE_ENUM.REGISTER | TODO_PAGE_ENUM.UPDATE;

export enum TODO_PAGE_ENUM{
    REGISTER = "REGISTER",
    UPDATE = "UPDATE"
}


// 우선순위 타입
export type PriorityType = "urgent" | "normal" | "low";

// 우선순위 ENUM
export enum PriorityToKOEnum{
    urgent = "긴급",
    normal = "보통",
    low = "낮음"
}

// SORT 방향
export enum Direction{
    ASC="asc",
    DESC="desc"
}
