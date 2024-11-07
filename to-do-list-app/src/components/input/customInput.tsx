import  {HTMLInputTypeAttribute} from 'react';
import "../../css/index.css"

interface CustomInputProps {
    label: string; // input 라벨
    value: string;// input 값
    onChange:(value: string) => void; // input 값 변경 이벤트
    inputType:HTMLInputTypeAttribute // input 타입
}

function CustomInput({
    value,
    onChange,
    inputType,
    label
                     }:CustomInputProps) {


    return (<label
            className={"input-container"}
        >
            {label}
            <input
                className={"custom-input"}
                type={inputType}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>
    );
}

export default CustomInput;
