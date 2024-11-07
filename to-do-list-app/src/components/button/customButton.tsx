
interface CustomButtonProps {
    label: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}
function CustomButton({
    label,
    onClick,
    type="button",
    disabled

                      }:CustomButtonProps) {
    return (
        <button
            disabled={disabled}
            className={"custom-button"}
            onClick={onClick}
        type={type}
        >{label}</button>
    );
}

export default CustomButton;
