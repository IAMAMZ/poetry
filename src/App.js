import "./App.css";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";

function App() {
  const [poems, setPoems] = useState();

  function searchTitle(title) {
    console.log("search title worked");
    const url = "https://poetrydb.org/title/" + title;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setPoems(data);
      });
  }

  useEffect(() => {
    console.log("useEffect worked...");
  }, [poems]);
  return (
    <div className="App">
      <h1>Poetry</h1>
      <SearchBox
        label="Search for title:"
        buttonTxt={"Search"}
        whenSubmit={searchTitle}
      />
      {poems
        ? poems.map((poem) => {
            const lines = poem.lines;
            return (
              <div>
                <hr />
                {lines.map((line) => (
                  <p>{line}</p>
                ))}
                <hr />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
