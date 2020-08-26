import React from "react";
import { Form, TextArea } from "semantic-ui-react";

const TextInput = ({ wordcountInProgress, setWordcountInProgress }) => {
  const handleTextInput = (e) => {
    const words = e.target.value;
    setWordcountInProgress(words.split(" ").length);
  };

  return (
    <div className="TextInput">
      <Form>
        <TextArea
          name="textinput"
          style={{ minHeight: 500 }}
          onChange={handleTextInput}
        />
      </Form>

      <p>Your current wordcount is: {wordcountInProgress}</p>
    </div>
  );
};

export default TextInput;
