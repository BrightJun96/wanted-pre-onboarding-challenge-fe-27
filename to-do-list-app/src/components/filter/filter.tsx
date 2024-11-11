import {useState} from "react";
import {useSearchParams} from "react-router-dom";
import CustomSelect from "../select/customSelect.tsx";

function Filter() {

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
        <>
            <CustomSelect
                options={PriorityOptions}
                value={priorityFilter}
                onChange={handlePriorityChange }/>
        </>
    );
}

export default Filter;
