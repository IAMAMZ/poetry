import Dictionary from "../components/Dictionary";
import SearchBox from "../components/SearchBox";
import Poem from "../components/Poem";
import { useState } from "react";

export default function Home({
  searchTitle,
  poems,
  fetchPoems,
  error,
  setError,
}) {
  // to track if just the title changed, the author changed or both
  const [titleChange, setTitleChange] = useState(false);
  const [authorChange, setAuthorChange] = useState(false);
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();

  const getPoems = () => {
    if (titleChange && !authorChange) {
      console.log("Fetching title.....", title);
      fetchPoems("https://poetrydb.org/title/", title);
    }
    if (authorChange && !titleChange) {
      console.log("Fetching authro...", author);
      fetchPoems("https://poetrydb.org/author/", author);
    }
    if (authorChange && titleChange) {
      console.log("fetching both title and author....", title, author);
      fetchPoems(`https://poetrydb.org/author,title/${author};${title}`, "");
    }
  };

  return (
    <div>
      {/* <Dictionary /> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getPoems();
        }}
      >
        <SearchBox
          label="Search for title:"
          buttonTxt={"Search"}
          inputVal={setTitle}
          changed={setTitleChange}
        />
        <SearchBox
          label="Search for author"
          buttonTxt={"search"}
          inputVal={setAuthor}
          changed={setAuthorChange}
        />
        <button>Search</button>
      </form>
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
