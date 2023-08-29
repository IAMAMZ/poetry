const SavedWord = ({ word, meanings }) => {
  console.log("saved word is : ", word, "saved meanings: ", meanings);
  return (
    <div className="SavedWordsComponent">
      <h1>Here are saved words</h1>
      <h2>{word}</h2>
      <div>
        {meanings.map((meaning) => {
          return <p>{meaning}</p>;
        })}
      </div>
    </div>
  );
};

export default SavedWord;
