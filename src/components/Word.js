import { useState } from "react";
import "./Word.css";

export default function Word({ words, saveWordFunc }) {
  let lines = [];
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
    console.log(lines);
  }

  return (
    <>
      <div className="WordSlider">
        <div className="LinesWrapper">
          {lines.map((line, i) => {
            return <p key={i}>{line}</p>;
          })}
        </div>
        <button
          onClick={() => {
            saveWordFunc(lines);
          }}
        >
          Save Word
        </button>
      </div>
    </>
  );
}
