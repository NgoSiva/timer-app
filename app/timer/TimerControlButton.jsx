import { Play } from "lucide-react";
import { Pause } from "lucide-react";
import { useTimerStore } from "../timer.store";
import { RotateCcw } from "lucide-react";

export const TimerControlButton = ({ id, isRunning, timeLeft }) => {
  const toggleRunning = useTimerStore((state) => state.toggleRunning);
  return (
    <button
      className="absolute bottom-3 right-3"
      onClick={() => toggleRunning(id)}
    >
      {isRunning ? <Pause /> : timeLeft > 0 ? <Play /> : <RotateCcw />}
    </button>
  );
};
