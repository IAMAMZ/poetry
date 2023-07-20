import Draggable from "react-draggable";
import "./Dictionary.css";
import { useState } from "react";
import Word from "./Word";

export default function Dictionary() {
  const [words, setWords] = useState();
  const [inWord, setInword] = useState();
  return (
    <Draggable>
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
        <Word words={words} />
      </div>
    </Draggable>
  );
}
