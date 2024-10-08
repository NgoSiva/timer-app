import { X } from "lucide-react";
import { useTimerStore } from "../timer.store";

export const TimerRemoveButton = ({ id }) => {
  const removeTimer = useTimerStore((state) => state.removeTimer);
  return (
    <button
      className="absolute bottom-3 left-3"
      onClick={() => removeTimer(id)}
    >
      <X />
    </button>
  );
};
