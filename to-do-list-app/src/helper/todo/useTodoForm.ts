import {useState} from "react";
import {TodoFormInterface} from "../../components/feature/todo/todoDetails/todoDetailsForm.tsx";
import {FieldType} from "../../components/form/abstractForm.tsx";
import {PriorityOptions} from "../../constant/feature/todo/constant.ts";

function useTodoForm() {
    // 할일 등록 폼
    const [todoForm, setTodoForm] = useState<TodoFormInterface>({
        title: "",
        content: "",
        priority: "urgent"
    })

    // 폼 변경
    function handleFormChange( key: keyof TodoFormInterface,value: string) {
        setTodoForm({
            ...todoForm,
            [key]: value
        })
    }

    // 폼 버튼 비활성화 조건
    const ButtonDisabledCondition = todoForm.title === "" || todoForm.content === ""

    // 필드
    const fields:FieldType[]=[
        {
            type: "text",
            label: "제목",
            value: todoForm.title,
            onChange: (value: string) => handleFormChange("title", value)
        },
        {
            type: "text",
            label: "내용",
            value: todoForm.content,
            onChange: (value: string) => handleFormChange("content", value)
        },
        {
            type: "radio",
            label: "우선순위",
            value: todoForm.priority,
            onChange: (value: string) => handleFormChange("priority", value),
            options: PriorityOptions,
        }
    ]

    return {todoForm,ButtonDisabledCondition,handleFormChange,setTodoForm,fields}
}

export default useTodoForm;
