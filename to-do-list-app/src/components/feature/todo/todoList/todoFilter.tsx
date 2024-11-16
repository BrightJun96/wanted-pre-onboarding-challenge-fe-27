import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import CustomSelect from "../../../select/customSelect.tsx";

// 할일 목록 필터 > CustomSelect 컴포넌트를 구현한 컴포넌트
function TodoFilter() {

   const [priorityFilter,setPriorityFilter] = useState<string>("")
   const [_,setSearchParams] = useSearchParams()

    const PriorityOptions = [
        {label: "높음", value: "urgent"},
        {label: "중간", value: "normal"},
        {label: "낮음", value: "low"},
    ]

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
