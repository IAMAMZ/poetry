import Dictionary from "../components/Dictionary";
import SearchBox from "../components/SearchBox";
import Poem from "../components/Poem";
import { useState, useEffect } from "react";

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

  useEffect(() => {
    document.title = "Home";
  }, []);

  const getPoems = () => {
    if (titleChange && !authorChange) {
      fetchPoems("https://poetrydb.org/title/", title);
    }
    if (authorChange && !titleChange) {
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
        className="home-form"
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
        <div className="home-btn-contaner">
          <button className="home-form-seach-btn">Search</button>
        </div>
      </form>
      <div className="poemsWrapper">
        {poems ? (
          poems.map((poem) => {
            const lines = poem.lines;
            const author = poem.author;
            const title = poem.title;
            return (
              <div>
                <Poem
                  title={title}
                  author={author}
                  lines={lines}
                  saveOrDelete="save"
                />
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
