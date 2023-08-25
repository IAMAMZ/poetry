import { useEffect, useState, useContext } from "react";
import { baseUrl } from "../shared";
import Poem from "../components/Poem";
import AuthContext from "../context/AuthProvider";
export default function SavedPoems() {
  const [poems, setPoems] = useState();
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    console.log(auth);
    console.log("trying to fetch poems");
    fetch(baseUrl + "/api/poems/" + auth.user, {
      headers: { Authorization: "Bearer " + auth.accessToken },
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response);
          throw new Error("Something went wrong in network");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPoems(data.poems);
      });
  }, []);

  return (
    <div>
      {poems ? (
        poems.map((poem) => {
          return (
            <Poem title={poem.title} author={poem.author} lines={poem.lines} />
          );
        })
      ) : (
        <h1>No Saved Poems found</h1>
      )}
    </div>
  );
}
