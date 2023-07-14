import Draggable from "react-draggable";
import "./Dictionary.css";
import { useState } from "react";

export default function Dictionary() {
  const [word, setWord] = useState();
  const [inWord, setInword] = useState();

  return (
    <Draggable>
      <>
        <form
          className="dictForm"
          onSubmit={(e) => {
            e.preventDefault();
            const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
            fetch(url + inWord)
              .then((response) => response.json())
              .then((data) => console.log(data));
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
        <p>{word}</p>
      </>
    </Draggable>
  );
}
