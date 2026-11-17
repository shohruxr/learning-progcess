import { useState } from "react";

function Message() {
  const [message, setMessage] = useState("Green");

  const Color = () => {
    if (message === "Green") {
      return <h1 style={{color:"green"}}>"This is Green"</h1>;
    } else if (message === "Red") {
      return <h1 style={{color:"red"}}>"This is Red"</h1>;
    } else {
      return <h1 style={{color:"blue"}}>"This is Blue"</h1>;
    }
  };

  return (
      <div>
        {Color()}
        <button onClick={() => setMessage("Green")}>Green</button>
        <button onClick={() => setMessage("Red")}>Red</button>
        <button onClick={() => setMessage("Blue")}>Blue</button>
      </div>  
  );
}

export default Message;
