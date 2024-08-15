
import "./TextField.css";

const TextField = ({label, placeholder, obligated, theValue, whenAltered}) => {

    

    const whenTyped = (event) => { 
        whenAltered(event.target.value)    
        console.log(theValue )
    };
    return (
        <div className="text-field">
            <label>{label}</label>
            <input value={theValue} onChange={whenTyped} placeholder={placeholder} required={obligated}></input>
        </div>
        
    )
};

export default TextField;
