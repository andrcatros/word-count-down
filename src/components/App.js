import React, { useState } from "react";
import "../styles/App.scss";

import Options from "./Options";
import TextInput from "./TextInput";

function App() {
  const [wordcountInProgress, setWordcountInProgress] = useState(0);
  const [wordcount, setWordcount] = useState(0);
  const [isWriting, setIsWriting] = useState(false);

  const getDivNum = () => {
    if (wordcount) {
      return Math.floor(wordcountInProgress / (wordcount / 16));
    } else {
      return "x";
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    console.log("I am resetting everything");

    setWordcountInProgress(0);
    setWordcount(0);
    setIsWriting(false);
  };

  return (
    <div className={`App gradient-divs${getDivNum()}`}>
      <h1>Welcome to Word Countdown!</h1>
      <p>
        The background color of this page will change from red to green as you
        get closer to your target. Let those ugly shades motivate you to keep
        writing. :)
      </p>

      {!isWriting && (
        <Options setWordcount={setWordcount} setIsWriting={setIsWriting} />
      )}
      {isWriting && (
        <TextInput
          wordcountInProgress={wordcountInProgress}
          setWordcountInProgress={setWordcountInProgress}
        />
      )}

      <p>Your target is: {wordcount}</p>

      {isWriting && (
        <button type="submit" name="reset goal" onClick={handleReset}>
          Reset Goal
        </button>
      )}
    </div>
  );
}

export default App;
