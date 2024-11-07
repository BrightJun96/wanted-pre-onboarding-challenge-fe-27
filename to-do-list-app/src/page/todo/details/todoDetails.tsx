import TodoDetailsForm from "../../../components/feature/todo/todoDetails/todoDetailsForm.tsx";
import {TODO_PAGE_ENUM} from "../../../constant/feature/todo/constant.ts";

function TodoDetails() {
    return (
        <TodoDetailsForm
        pageType={TODO_PAGE_ENUM.UPDATE}
        />
    );
}

export default TodoDetails;
