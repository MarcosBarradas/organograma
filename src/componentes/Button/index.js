
import "./Button.css"

const Button = ({text, children}) => {
return (
    <button className="button">
        {children}
    </button>
)
}

export default Button