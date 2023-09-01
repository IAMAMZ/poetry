import { useContext } from "react";
import { baseUrl } from "../shared";
import "./Poem.css";
import AuthContext from "../context/AuthProvider";

export default function Poem({ title, author, lines }) {
  const { auth } = useContext(AuthContext);
  console.log(Object.keys(auth).length);
  return (
    <div className="poemWrapper">
      <h2 className="title">{title}</h2>
      <h3 className="author">{author}</h3>
      <hr />
      <div className="linesWrapper">
        {lines.map((line) => (
          <p>{line}</p>
        ))}
        {!Object.keys(auth).length == 0 ? (
          <button
            onClick={() => {
              const poemObj = JSON.stringify({
                title: title,
                author: author,
                lines: lines,
              });
              fetch(baseUrl + "/api/poems/" + auth.user, {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: "Bearer " + auth.accessToken,
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
        ) : null}
      </div>
    </div>
  );
}
