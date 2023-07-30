import Dictionary from "../components/Dictionary";
import SearchBox from "../components/SearchBox";
import Poem from "../components/Poem";

export default function Home({
  searchTitle,
  poems,
  setPoems,
  error,
  setError,
}) {
  return (
    <div>
      {/* <Dictionary /> */}
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
