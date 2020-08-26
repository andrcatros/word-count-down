import React, { useState } from "react";

const Options = () => {
  const [wordcount, setWordcount] = useState(0);
  const handleWordcount = (e) => {
    setWordcount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(wordcount);
  };
  return (
    <div className="Options">
      <form onSubmit={handleSubmit}>
        Your target word count:
        <input
          type="number"
          step="100"
          value={wordcount}
          onChange={handleWordcount}
        />
        <button type="submit">I am ready to begin</button>
      </form>
    </div>
  );
};

export default Options;
