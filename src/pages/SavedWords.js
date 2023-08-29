import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useState, useEffect } from "react";
import SavedWord from "../components/SavedWord";

export default function SavedWords() {
  const [savedWords, setSavedWords] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  useEffect(() => {
    console.log(savedWords);
    console.log("Saved Words changed");
  }, [savedWords]);

  useEffect(() => {
    console.log("useEffect of saved poems ran");
    let isMounted = true;
    const controller = new AbortController();
    const getWords = async () => {
      try {
        const response = await axiosPrivate.get("/api/words/" + auth.user, {
          signal: controller.signal,
        });
        isMounted && setSavedWords(response.data.words);
        console.log("the state is ...", savedWords);
      } catch (err) {
        console.log(err);
      }
    };

    getWords();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);
  return (
    <div>
      {savedWords ? (
        savedWords?.map((word) => {
          return <SavedWord word={word.word} meanings={word.meanings} />;
        })
      ) : (
        <h1>No Saved Words found</h1>
      )}
    </div>
  );
}
