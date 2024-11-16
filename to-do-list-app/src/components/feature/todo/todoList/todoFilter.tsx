import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import {PriorityOptions} from "../../../../constant/feature/todo/constant.ts";
import CustomSelect from "../../../select/customSelect.tsx";

// 할일 목록 필터 > CustomSelect 컴포넌트를 구현한 컴포넌트
function TodoFilter() {

   const [priorityFilter,setPriorityFilter] = useState<string>("")
   const [_,setSearchParams] = useSearchParams()


    function handlePriorityChange(value:string){
        setPriorityFilter(value)
        setSearchParams({priorityFilter:value})
    }

    return (
            <CustomSelect
                label={"우선순위"}
                options={PriorityOptions}
                value={priorityFilter}
                onChange={handlePriorityChange }/>
    );
}

export default TodoFilter;
