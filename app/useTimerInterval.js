import { useEffect } from "react";
import { useTimerStore } from "./timer.store";

export const useTimerInterval = (isRunning) => {
  useEffect(() => {
    const myInterval = setInterval(() => {
      useTimerStore.setState((state) => {
        return {
          timers: state.timers.map((timer) => {
            if (timer.isRunning) {
              const timeLeft =
                timer.timeLeft - 1000 < 0 ? 0 : timer.timeLeft - 1000;
              const isRunning = timeLeft === 0 ? false : true;
              if (timeLeft === 0) {
                new Audio("./ring.mp3").play();
              }
              return {
                ...timer,
                timeLeft: timeLeft,
                isRunning: isRunning,
              };
            }
            return timer;
          }),
        };
      });
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  }, [isRunning]);
};
