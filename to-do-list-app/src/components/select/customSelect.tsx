
interface SelectOption {
    label: string;
    value: string;
}

interface CustomSelectProps {
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
}

function CustomSelect({options,value,onChange}:CustomSelectProps) {
    return (
        <select
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
    );
}

export default CustomSelect;
