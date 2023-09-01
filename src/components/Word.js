import { useContext, useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import "./Word.css";

export default function Word({ words, saveWordFunc, err: [err, setErr] }) {
  const lines = useState([]);
  const { auth } = useAuth();
  console.log(words);
  console.log("The error object is ", err);

  if (words) {
    for (let i = 0; i < words.length; i++) {
      let wordMeanings = words[i];
      if (wordMeanings.meanings) {
        for (let j = 0; j < wordMeanings.meanings.length; j++) {
          let definitions = wordMeanings.meanings[j].definitions;
          if (definitions) {
            for (let k = 0; k < definitions.length; k++) {
              lines.push(definitions[k].definition);
            }
          }
        }
      }
    }
  }

  console.log("the lines is ", lines.length);
  console.log(auth);

  return (
    <>
      <div className="WordSlider">
        <div className="LinesWrapper">
          {lines.map((line, i) => {
            return <p key={i}>{line}</p>;
          })}
        </div>
        {!err ? (
          lines.length == 2 || !auth.user ? null : (
            <button
              onClick={() => {
                saveWordFunc(lines);
              }}
            >
              Save Word
            </button>
          )
        ) : (
          <p>No word found</p>
        )}
      </div>
    </>
  );
}
