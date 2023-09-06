import { useEffect, useState, useContext } from "react";
import { baseUrl } from "../shared";
import Poem from "../components/Poem";
import AuthContext from "../context/AuthProvider";
import useAuth from "../hooks/useAuth";
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export default function SavedPoems() {
  const [poems, setPoems] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  useEffect(() => {
    console.log("useEffect of saved poems ran");
    let isMounted = true;
    const controller = new AbortController();
    const getPoems = async () => {
      try {
        console.log("try executed");
        const response = await axiosPrivate.get("/api/poems/" + auth.user, {
          signal: controller.signal,
        });
        console.log(response.data);
        isMounted && setPoems(response.data.poems);
      } catch (err) {
        console.log(err);
      }
    };

    getPoems();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return (
    <div>
      {poems ? (
        poems?.map((poem, i) => {
          return (
            <Poem
              key={i}
              title={poem.title}
              author={poem.author}
              lines={poem.lines}
              poemId={poem._id}
            />
          );
        })
      ) : (
        <h1>No Saved Poems found</h1>
      )}
    </div>
  );
}
