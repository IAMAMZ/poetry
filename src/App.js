import "./App.css";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";
import Poem from "./components/Poem";
import Header from "./components/Header";

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
      <Header></Header>
      <SearchBox
        label="Search for title:"
        buttonTxt={"Search"}
        whenSubmit={searchTitle}
      />
      {poems
        ? poems.map((poem) => {
            const lines = poem.lines;
            const author = poem.author;
            const title = poem.title;
            return (
              <div>
                <Poem title={title} author={author} lines={lines} />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
