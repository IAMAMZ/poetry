import "./Poem.css";

export default function Poem({ title, author, lines }) {
  return (
    <div className="poemWrapper">
      <h2 className="title">{title}</h2>
      <h3 className="author">{author}</h3>
      <hr />
      {lines.map((line) => (
        <p>{line}</p>
      ))}
    </div>
  );
}
