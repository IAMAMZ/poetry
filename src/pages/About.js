import { useEffect } from "react";
import "./About.css";
export default function Aboout() {
  useEffect(() => {
    document.title = "About Page";
  }, []);
  return (
    <div className="aboutUspg">
      <h1>About This Project</h1>
      <h2>
          Hello there,
      </h2>
      <p>
          I'm Miran Qarachatani, a second-year CS student with a fondness for poetry
          . I created The Poetry App as a simple tool to explore and understand the world of poetry better.
          Here, you can search for poems using PoetryDB, save the ones that resonate, and delve deeper into unfamiliar words with an integrated dictionary.
            Everything is stored securely, letting each user keep their discoveries private. 
            It's a personal project, shaped by my love for words and the emotions they carry.
      </p>
      <h4>Thanks for dropping by.</h4>
      <h5>You can view the source code for the frontend: <a href="https://github.com/IAMAMZ/poetry">Here</a></h5>

      <h5>You can view the source code for the backend: <a href="https://github.com/IAMAMZ/Poetry-App-Server">Here</a></h5>
       
    </div>
  );
}
