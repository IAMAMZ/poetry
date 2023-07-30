import Draggable from "react-draggable";
import "./Dictionary.css";
import { useState } from "react";
import Word from "./Word";
import { FaRegWindowClose } from "react-icons/fa";

export default function Dictionary({ show, changeShow }) {
  console.log("show in dictioary component is", show);
  const [words, setWords] = useState();
  const [inWord, setInword] = useState();
  return (
    <div className={"dictionary " + (show ? "dictVisible" : "dictHidden")}>
      <button onClick={changeShow} className="dict-close-btn">
        <FaRegWindowClose />
      </button>
      <div>
        <form
          className="dictForm"
          onSubmit={(e) => {
            console.log("form submitted");
            e.preventDefault();
            const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
            fetch(url + inWord)
              .then((response) => response.json())
              .then((data) => {
                setWords(data);
              });
          }}
        >
          <fieldset>
            <label htmlFor="word">Search: </label>
            <input
              id="word"
              type="text"
              onChange={(e) => setInword(e.target.value)}
            ></input>
            <button>Search</button>
          </fieldset>
        </form>
        <div className="wordContainer">
          <Word words={words} />
        </div>
      </div>
    </div>
  );
}
