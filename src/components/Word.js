import { useState } from "react";

export default function Word({ words }) {
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
  }

  return (
    <div>
      {lines.map((line) => {
        return <p>{line}</p>;
      })}
    </div>
  );
}
