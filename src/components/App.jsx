import React, { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState(false);

  function handleColor() {
    setButtonColor(true);
  }

  function hanldeOut() {
    setButtonColor(false);
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: buttonColor ? "black" : "white" }}
        onMouseOver={handleColor}
        onMouseOut={hanldeOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
