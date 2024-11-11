interface SelectOption {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: SelectOption[];
    value: string;
    label?: string;
    onChange: (value: string) => void;
}

function CustomSelect({options,label,value,onChange}:CustomSelectProps) {
    return (
        <div
        className={"common-flex-row-container"}
        style={{
            gap:"12px"
        }}
        >
            <label>{label}</label>
            <select
                style={{
                    flex:1
                }}
                onChange={(e) => onChange(e.target.value)}
            value={value}
            >
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CustomSelect;
