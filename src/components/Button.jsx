
import './button.css'
const Button = ({
    children,
    type = "button",
    onClick,
    variant = "primary",
    disabled = false
}) => {

    return (
        <button 
        type={type}
        className={`btn btn-${variant}`}
        disabled={disabled}
        onClick={onClick}
        >
        {children}
        </button>
    )
}

export default Button