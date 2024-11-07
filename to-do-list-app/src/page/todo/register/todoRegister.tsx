import TodoDetailsForm from "../../../components/feature/todo/todoDetails/todoDetailsForm.tsx";
import {TODO_PAGE_ENUM} from "../../../constant/feature/todo/constant.ts";

function TodoRegister() {
    return (
        <TodoDetailsForm
        pageType={TODO_PAGE_ENUM.REGISTER}
        />
    );
}

export default TodoRegister;
