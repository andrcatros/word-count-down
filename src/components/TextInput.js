import React, { useState } from "react";

const TextInput = () => {
  const [wordcountInProgress, setWordcountInProgress] = useState(0);
  const handleTextInput = (e) => {
    const words = e.target.value;
    setWordcountInProgress(words.split(" ").length);
  };

  const doNothing = (e) => {
    e.preventDefault();
  };
  return (
    <div className="TextInput">
      <form onSubmit={doNothing}>
        Start writing!
        <input type="text" onChange={handleTextInput} />
      </form>
      <p>Your current wordcount is: {wordcountInProgress}</p>
    </div>
  );
};

export default TextInput;
