import { baseUrl } from "../shared";
import "./Poem.css";

export default function Poem({ title, author, lines }) {
  return (
    <div className="poemWrapper">
      <h2 className="title">{title}</h2>
      <h3 className="author">{author}</h3>
      <hr />
      <div className="linesWrapper">
        {lines.map((line) => (
          <p>{line}</p>
        ))}
        <button
          onClick={() => {
            const poemObj = JSON.stringify({
              title: title,
              author: author,
              lines: lines,
            });
            fetch(baseUrl + "/api/poems", {
              headers: {
                "Content-Type": "application/json",
              },
              method: "POST",
              body: poemObj,
            })
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((data) => {
                console.log(data);
              })
              .catch();
          }}
        >
          Save Poem
        </button>
      </div>
    </div>
  );
}
