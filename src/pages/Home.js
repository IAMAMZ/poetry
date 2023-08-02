import Dictionary from "../components/Dictionary";
import SearchBox from "../components/SearchBox";
import Poem from "../components/Poem";
import { useState } from "react";

export default function Home({
  searchTitle,
  poems,
  setPoems,
  error,
  setError,
}) {
  // to track if just the title changed, the author changed or both
  const [titleChagne, setTitleChange] = useState(false);
  const [authorChange, setAuthorChnage] = useState(false);
  return (
    <div>
      {/* <Dictionary /> */}
      <SearchBox
        label="Search for title:"
        buttonTxt={"Search"}
        whenSubmit={(query) =>
          searchTitle("https://poetrydb.org/title/", query)
        }
        changed={titleChagne}
      />
      <SearchBox
        label="Search for author"
        buttonTxt={"search"}
        whenSubmit={(query) => {
          searchTitle("https://poetrydb.org/author/", query);
        }}
        changed={authorChange}
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
