import { useEffect, useRef, useState } from "react";

function PrevValue() {
  const [value, setValue] = useState("");
  const prevValueRef = useRef<string>("");
  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);
  return (
    <div>
      <h2>Previous Value Example</h2>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Current Value: {value}</p>
      {/* <p>Previous Value: {prevValueRef.current}</p> */}
    </div>
  );
}
export default PrevValue;
