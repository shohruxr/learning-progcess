import { useState } from "react";

function Counter() {
  const [user, setUser] = useState({ name: "Maykl", age: 34 });

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button
        onClick={() => setUser((prev) => ({ ...prev, age: prev.age + 1 }))}
      >
        Increase Age
      </button>
    </div>
  );
}
export default Counter;
