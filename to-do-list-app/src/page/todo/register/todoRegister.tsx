import TodoDetailsForm from "../../../components/feature/todo/todoDetails/todoDetailsForm.tsx";
import {TODO_PAGE_ENUM} from "../../../type/feature/todo/types.ts";

function TodoRegister() {
    return (
        <TodoDetailsForm
        pageType={TODO_PAGE_ENUM.REGISTER}
        />
    );
}

export default TodoRegister;
