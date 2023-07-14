import "./App.css";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";
import Poem from "./components/Poem";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";

function App() {
  const [poems, setPoems] = useState();
  const [error, setError] = useState();

  function searchTitle(title) {
    console.log("search title worked");
    const url = "https://poetrydb.org/title/" + title;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        if (response.status === 401) {
          console.log("not found");
        }
        throw new Error("Something went wrong");
      })
      .then((data) => {
        if (data.status) {
          setError("not found");
          setPoems(null);
          throw new Error("not found");
        } else {
          setPoems(data);
        }
      })
      .catch(() => {
        setError("Resource not found:) please search for another combination");
      });
  }

  return (
    <div className="App">
      <Header></Header>
      <Dictionary />
      <SearchBox
        label="Search for title:"
        buttonTxt={"Search"}
        whenSubmit={searchTitle}
      />
      <div className="poemsWrapper">
        {console.log(poems)}
        {poems ? (
          poems.map((poem) => {
            const lines = poem.lines;
            const author = poem.author;
            const title = poem.title;
            return (
              <div>
                <Poem title={title} author={author} lines={lines} />
              </div>
            );
          })
        ) : (
          <p>{error}</p>
        )}
      </div>
    </div>
  );
}

export default App;
