import "./App.css";
import SearchBox from "./components/SearchBox";
import { useEffect, useState } from "react";
import Poem from "./components/Poem";
import Header from "./components/Header";
import Dictionary from "./components/Dictionary";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SavedWords from "./pages/SavedWords";
import Home from "./pages/Home";
import About from "./pages/About";
import SavedPoems from "./pages/SavedPoems";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  console.log("App component ran");
  const [poems, setPoems] = useState();
  const [error, setError] = useState();
  const [bothInput, setBothInput] = useState();

  function fetchPoems(url, query) {
    console.log("search title worked");
    fetch(url + query)
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
              fetchPoems={fetchPoems}
            />
          }
        />
        <Route path="/savedwords" element={<SavedWords />} />
        <Route path="/about" element={<About />} />
        <Route path="/savedpoems" element={<SavedPoems />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
