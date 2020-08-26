import React, { useState } from "react";
import "../styles/App.scss";

import Options from "./Options";
import TextInput from "./TextInput";

function App() {
  const [wordcountInProgress, setWordcountInProgress] = useState(0);
  const [wordcount, setWordcount] = useState(0);

  const getDivNum = () => {
    return Math.floor(wordcountInProgress / (wordcount / 8));
  };

  return (
    <div className={`App gradient-divs${getDivNum()}`}>
      <p>
        The background color of this page will change from red to green as you
        get closer to your wordcount target :)
      </p>

      <Options setWordcount={setWordcount} />
      <TextInput
        wordcountInProgress={wordcountInProgress}
        setWordcountInProgress={setWordcountInProgress}
      />

      <p>Your target is: {wordcount}</p>
    </div>
  );
}

export default App;
