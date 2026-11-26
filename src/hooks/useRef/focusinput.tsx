import { useRef } from "react";

function FocusInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
            inputRef.current?.focus()
    }
    return (<div>
        <h2>Focus Input Example</h2>
        <input ref={inputRef} type="text" placeholder="Type something..." />
        <button onClick={handleFocus}>Focus Input</button>
    </div>)
}
export default FocusInput;