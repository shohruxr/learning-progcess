import { useEffect, useState } from "react";

export const BgCleanUP = () => {
  const [bgColor, setBgColor] = useState(false);
  useEffect(() => {
    if (bgColor) {
      document.body.style.backgroundColor = "salmon";
    }

    return () => {
      document.body.style.backgroundColor = "black";
    };
  }, [bgColor]);

  return (
    <div>
      <p>Current background color: {bgColor ? 'salmon' : 'black'}</p>
      <button onClick={() => setBgColor(!bgColor)}>{bgColor ? 'Change to Black' : 'Change to Salmon'}</button>
    </div>
  );
};
