import React from "react";
import "../styles/App.scss";

import Options from "./Options";
import TextInput from "./TextInput";

function App() {
  return (
    <div className="App gradient-divs1">
      <p>This is the App component</p>

      <Options />
      <TextInput />
    </div>
  );
}

export default App;
