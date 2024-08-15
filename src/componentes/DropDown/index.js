import "./DropDown.css";

const DropDown = ({ label, items, obligated, theValue, whenAltered }) => {
  return (
    <div className="dropDown">
      <label>{label}</label>
      <select
        onChange={(event) => whenAltered(event.target.value)}
        required={obligated}
        value={theValue}
      >
        {items.map((item) => (
          <option key={item} >{item}</option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
