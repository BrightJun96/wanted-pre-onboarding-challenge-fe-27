import TodoFormContainer from "../../../components/feature/todo/todoFormContainer.tsx";
import TodoRegisterForm from "../../../components/feature/todo/todoRegister/todoRegisterForm.tsx";

// 할일 등록 페이지
function TodoRegister() {
    return (
        <TodoFormContainer>
            <TodoRegisterForm
            />
        </TodoFormContainer>
    );
}

export default TodoRegister;
