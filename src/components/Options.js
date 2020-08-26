import React from "react";

const Options = ({ setWordcount }) => {
  let target;

  const handleWordcount = (e) => {
    target = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setWordcount(target);
    target = 0;
  };
  return (
    <div className="Options">
      <form onSubmit={handleSubmit}>
        Your target word count:
        <input
          type="number"
          step="100"
          value={target}
          onChange={handleWordcount}
        />
        <button type="submit">I am ready to begin</button>
      </form>
    </div>
  );
};

export default Options;
