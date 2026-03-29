type ButtonProps = {
    text?: string,
    onClick?: () => void,
    className?: string,
    children?: React.ReactNode
};

const Button = ({ text, onClick, className = "", children }: ButtonProps) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
            {children}
        </button>
    );
};

export default Button;