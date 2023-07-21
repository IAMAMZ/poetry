import "./App.css";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";
import Poem from "./components/Poem";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SavedWords from "./pages/SavedWords";
import Home from "./pages/Home";

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
      <Routes>
        <Route
          path="*"
          element={
            <Home
              poems={poems}
              setPoems={setPoems}
              error={error}
              setError={setError}
              searchTitle={searchTitle}
            />
          }
        />
        <Route path="/saved-words" element={<SavedWords />} />
      </Routes>
    </div>
  );
}

export default App;
