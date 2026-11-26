import { useState } from "react";

function WrongTimer() {
  const [interval, setCount] = useState<number | null>(null);
  const startTimer = () => {
    const timer = window.setInterval(() => {console.log("tick")}, 1000);
    setCount(timer);
  }
  console.log('Rendering')
    return (<button onClick={startTimer}>Start Timer</button>)
}
export default WrongTimer