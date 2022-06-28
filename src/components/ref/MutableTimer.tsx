import { useRef, useEffect, useState } from "react";

const MutableTimer = () => {
  const [timer, setTimer] = useState(0);
  const timerInterval = useRef<number>(null!);

  const stopTimer = () => {
    timerInterval.current && clearInterval(timerInterval.current);
  };
  useEffect(() => {
    timerInterval.current = window.setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <span>Hook Timer - {timer} - </span>
      <hr />
      <button
        onClick={() => {
          stopTimer();
        }}
      >
        Stop Timer
      </button>
    </div>
  );
};

export default MutableTimer;
