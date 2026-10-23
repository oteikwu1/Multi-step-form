const Button = ({
    children,
    type = "button",
    onClick,
    variant = "primary",
    disable = false
}) => {

    return (
        <button 
        type={type}
        className={`btn btn-${variant}`}
         disabled={disable}
        >
            {children}
        </button>
    )
}

export default Button