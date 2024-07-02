import { useRef, useState } from "react";
import ResultModel from "./ResultModel.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();

  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  console.log(timeRemaining);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    dialog.current.open();
  }

  function handleReset(){
    setTimeRemaining(targetTime*1000);
  }
  console.log(timeRemaining);

  return (
    <>
      <ResultModel ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} seconds{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "stop" : "start"} challenge
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Time is running" : " timer inactive"}
        </p>
      </section>
    </>
  );
}
