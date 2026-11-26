import { useEffect, useRef } from "react";

function RightTimer() {
  const intervalRef = useRef<number | null>(null);
  const startTimer = () => {
    intervalRef.current = window.setInterval(()=>{
console.log("tick")
    }, 1000)
    }
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [])
    console.log('Rendering')
    return (<button onClick={startTimer}>Start Timer</button>)
}
export default RightTimer