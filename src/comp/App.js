import React from "react";
import emojipedia from "../emojipedia";


function App() {
  const handleClick = (event) => {
    const ddElement = event.currentTarget;
    ddElement.classList.toggle("dd-expanded");
  };

  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((emoji) => (
          <div className="term" key={emoji.id}>
            <dt>
              <span className="emoji" role="img" aria-label={emoji.name}>
                {emoji.emoji}
              </span>
              <span>{emoji.name}</span>
            </dt>
            <dd onClick={handleClick}>{emoji.meaning}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default App;
