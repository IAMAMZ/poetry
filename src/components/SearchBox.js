import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({
  SearchBox,
  label,
  buttonTxt,
  whenSubmit = (f) => f,
  ...props
}) {
  const [formInput, setFormInput] = useState();

  return (
    <form
      onSubmit={(e) => {
        console.log(e.target.value);
        e.preventDefault();
        console.log(formInput);
        whenSubmit(formInput);
        console.log(whenSubmit(formInput));
      }}
    >
      <fieldset className="boxFieldset">
        <label>{label}</label>
        <input
          id="inputText"
          type="text"
          onChange={(e) => setFormInput(e.target.value)}
        ></input>
        <button type="submit">{buttonTxt}</button>
      </fieldset>
    </form>
  );
}
