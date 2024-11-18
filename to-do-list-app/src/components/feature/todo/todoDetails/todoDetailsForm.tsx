import useTodoDetailsDataMapping from "../../../../helper/todo/useTodoDetailsDataMapping.ts";
import useTodoForm from "../../../../helper/todo/useTodoForm.ts";
import {
    useMutationDeleteTodo,
    useMutationUpdateTodo,
    useQueryTodoDetails
} from "../../../../service/todos/query.todos.ts";
import {PriorityType} from "../../../../type/feature/todo/types.ts";
import AbstractForm, {AbstractButtonType} from "../../../form/abstractForm.tsx";

export interface TodoFormInterface {
    title: string;
    content: string;
    priority: PriorityType;
}


/**
 * 페이지 로딩시,데이터 호출 > 현재는 페이지를 다 불러오고 데이더 호출 이또한 react-router-dom loader활용
 * 에러 났을 때도 router에서 해결가능
 * defer??
 * zod 추천
 */
function TodoDetailsForm({detailsId}:{detailsId:string}) {

    const {todoForm,setTodoForm,ButtonDisabledCondition,fields}=useTodoForm()
    const {mutate:updateToDo} =useMutationUpdateTodo()
    const {mutate:deleteToDo} =useMutationDeleteTodo()
    const {data:todoDetails}=useQueryTodoDetails(detailsId)


    const buttons:AbstractButtonType[] =[
        {
            type: "submit",
            disabled: ButtonDisabledCondition,
            label: "수정",
        },
        {
            label: "삭제",
            type: "button",
            onClick: () => deleteToDo(detailsId)
        }
    ]

    // 폼 제출
     function handleFormSubmit(
    ) {
            updateToDo({id: detailsId, editTodoRequest: todoForm})

    }



    // 상세 데이터 매핑
    useTodoDetailsDataMapping({
        todoDetails,
        setTodoForm
    })


    return (
            <AbstractForm
            onSubmit={handleFormSubmit}
            className={"todo-details-form-container"}
            >
                {/*필드*/}
                <AbstractForm.Fields fields={fields}/>
                {/*버튼*/}
                <AbstractForm.Buttons buttons={buttons}/>
            </AbstractForm>
    );
}

export default TodoDetailsForm;
