import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({
  SearchBox,
  label,
  buttonTxt,
  inputVal,
  changed,
}) {
  const [formInput, setFormInput] = useState();

  return (
    <div>
      <fieldset className="boxFieldset">
        <label>{label}</label>
        <input
          id="inputText"
          type="text"
          onChange={(e) => {
            inputVal(e.target.value);
            changed(e.target.value);
          }}
        ></input>
      </fieldset>
    </div>
  );
}
