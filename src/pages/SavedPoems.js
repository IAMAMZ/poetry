import { useEffect, useState } from "react";
import { baseUrl } from "../shared";
import Poem from "../components/Poem";
export default function SavedPoems() {
  const [poems, setPoems] = useState();

  useEffect(() => {
    console.log("..useeffect ran");
    fetch(baseUrl + "/api/poems")
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
