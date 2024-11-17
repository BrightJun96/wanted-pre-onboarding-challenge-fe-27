import {useEffect} from "react";
import {TodoFormInterface} from "../../components/feature/todo/todoDetails/todoDetailsForm.tsx";
import {TodoListItemResponse} from "../../service/todos/types.ts";

function useTodoDetailsDataMapping({
    detailsId,
    todoDetails,
    setTodoForm
                                   }:{
    detailsId:string,
    todoDetails:TodoListItemResponse | undefined,
    setTodoForm: React.Dispatch<React.SetStateAction<TodoFormInterface>>
}) {
    useEffect(() => {


        if(detailsId&&todoDetails){
            setTodoForm({
                title: todoDetails.title,
                content: todoDetails.content,
                priority: todoDetails.priority
            })

        }
    }, [detailsId,todoDetails]);
}

export default useTodoDetailsDataMapping;
