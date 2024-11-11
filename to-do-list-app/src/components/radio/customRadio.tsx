import {useEffect} from "react";

export interface RadioOption{
    label: string;
    value: string;
}

interface CustomRadioProps {
    label: string;
    value: string;
    options: RadioOption[];
    onChange: (value: string) => void;
}

function CustomRadio({onChange,label,value,options}:CustomRadioProps) {

    useEffect(() => {
    }, []);
    return (
        <fieldset>
            <legend>{label}</legend>

            {options.map((option) => (
                <div key={option.value}>
                    <input type="radio"
                           onChange={(e) => onChange(e.target.value)}
                           id={option.value}
                           name={label}
                           value={option.value}
                           checked={value === option.value}
                    />
                    <label
                        htmlFor={option.value}>
                        {option.label}
                    </label>
                </div>
            ))
            }
        </fieldset>
    );
}

export default CustomRadio;
