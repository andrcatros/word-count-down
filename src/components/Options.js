import React from "react";

const Options = ({ setWordcount, setIsWriting }) => {
  let target;

  const handleWordcount = (e) => {
    target = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWordcount(target);
    setIsWriting(true);
    target = 0;
  };
  return (
    <div className="Options">
      <form onSubmit={handleSubmit}>
        Type your target word count:
        <input
          type="number"
          step="1"
          value={target}
          onChange={handleWordcount}
          required
        />
        <button type="submit">Write!</button>
      </form>
    </div>
  );
};

export default Options;
