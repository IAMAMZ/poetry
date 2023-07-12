import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ label, buttonTxt, whenSubmit = (f) => f }) {
  const [formInput, setFormInput] = useState();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        whenSubmit(formInput);
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
