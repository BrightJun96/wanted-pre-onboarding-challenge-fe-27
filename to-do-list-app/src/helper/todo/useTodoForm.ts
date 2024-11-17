import {useState} from "react";
import {TodoFormInterface} from "../../components/feature/todo/todoDetails/todoDetailsForm.tsx";

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

    return {todoForm,ButtonDisabledCondition,handleFormChange,setTodoForm}
}

export default useTodoForm;
