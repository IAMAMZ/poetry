import Draggable from "react-draggable";
import "./Dictionary.css";
import { useState } from "react";
import Word from "./Word";
import { FaRegWindowClose } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import { baseUrl } from "../shared";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { axiosPrivate } from "../api/axios";

export default function Dictionary({ show, changeShow }) {
  console.log("show in dictioary component is", show);
  const [words, setWords] = useState("");
  const [inWord, setInword] = useState();
  const axiosPrivate = useAxiosPrivate();

  const { auth } = useAuth();

  const saveWord = (lines) => {
    const wordObj = JSON.stringify({
      word: inWord,
      meanings: lines,
    });

    const pushWords = async () => {
      try {
        console.log(wordObj);
        const response = await axiosPrivate.post(
          "/api/words/" + auth.user,
          wordObj,
          { headers: { "Content-Type": "application/json" } }
        );
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    pushWords();

    // To do change this to axios
    // fetch(baseUrl + "/api/words/" + auth.user, {
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Bearer " + auth.accessToken,
    //   },
    //   method: "POST",
    //   body: wordObj,
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };
  return (
    <div className={"dictionary " + (show ? "dictVisible" : "dictHidden")}>
      <button onClick={changeShow} className="dict-close-btn">
        <FaRegWindowClose />
      </button>
      <div>
        <form
          className="dictForm"
          onSubmit={(e) => {
            console.log("form submitted");
            e.preventDefault();
            const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
            fetch(url + inWord)
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                setWords(data);
              });
          }}
        >
          <fieldset>
            <label htmlFor="word">Search: </label>
            <input
              id="word"
              type="text"
              onChange={(e) => setInword(e.target.value)}
            ></input>
            <button>Search</button>
          </fieldset>
        </form>
        <div className="wordContainer">
          <Word words={words} saveWordFunc={saveWord} />
        </div>
        <div className="saveWordWrapper"></div>
      </div>
    </div>
  );
}
