import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <Button
        variant="primary"
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        Add
      </Button>{" "}
    </div>
  );
}

export default TodoInput;
