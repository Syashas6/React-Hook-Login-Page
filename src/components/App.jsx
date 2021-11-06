import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("");
  const [name, setName] = useState("");

  function changeInput(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name);
    //prevent refreshing of pages
    event.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello, {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          type="text"
          placeholder="What's your name?"
          onChange={changeInput}
        />
        <button
          type="submit"
          style={{ backgroundColor: "white" }}
          onClick={handleClick}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
