import {useEffect} from "react";
import {TodoFormInterface} from "../../components/feature/todo/todoDetails/todoDetailsForm.tsx";
import {TodoListItemResponse} from "../../service/todos/types.ts";

function useTodoDetailsDataMapping({
    todoDetails,
    setTodoForm
                                   }:{
    todoDetails:TodoListItemResponse | undefined,
    setTodoForm: React.Dispatch<React.SetStateAction<TodoFormInterface>>
}) {

    useEffect(() => {


        if(todoDetails){
            setTodoForm({
                title: todoDetails.title,
                content: todoDetails.content,
                priority: todoDetails.priority
            })

        }
    }, [todoDetails]);
}

export default useTodoDetailsDataMapping;
