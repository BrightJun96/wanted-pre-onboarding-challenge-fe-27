import {useParams} from "react-router-dom";
import TodoDetailsForm from "../../../components/feature/todo/todoDetails/todoDetailsForm.tsx";
import TodoFormContainer from "../../../components/feature/todo/todoFormContainer.tsx";
import Fetcher from "../../../components/fetcher/fetcher.tsx";
import {useQueryTodoDetails} from "../../../service/todos/query.todos.ts";

// 할일 상세 페이지
function TodoDetails() {


    const {id} = useParams()
    return (
            <TodoFormContainer>
                <Fetcher params={id} query={useQueryTodoDetails}>
                    {id?<TodoDetailsForm detailsId={id}/>:<></>}
                </Fetcher>
            </TodoFormContainer>
    );
}

export default TodoDetails;
