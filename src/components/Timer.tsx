import { useRef, useState } from "react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const timerRef = useRef<number>(null!);
  const handleClick = () => {
    if (isCounting) {
      clearInterval(timerRef.current);
    } else {
      timerRef.current = window.setInterval(() => {
        setTimer((p) => p + 1);
      }, 1000);
    }
  };
  return (
    <div>
      <h1>Timer - {timer}</h1>
      <button
        onClick={() => {
          handleClick();
          setIsCounting(!isCounting);
        }}
      >
        {" "}
        {isCounting ? "Stop Timer" : "Start Timer"}
      </button>
    </div>
  );
};

export default Timer;
