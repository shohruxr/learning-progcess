import { useState } from "react";

function LogicalAnd() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Sample</h1>
      <input
        type="text"
        placeholder="yozing..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      {message && <p>Your message: {message}</p>}
    </div>
  );
}
export default LogicalAnd;