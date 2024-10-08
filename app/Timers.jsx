import { Timer } from "./Timer";
import { useTimerStore } from "./timer.store";
import { useTimerInterval } from "./useTimerInterval";
import { useShallow } from "zustand/react/shallow";

export const Timers = () => {
  const timers = useTimerStore(
    useShallow((state) => state.timers.map((timer) => timer.id))
  );
  useTimerInterval();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-fit mx-auto">
      {timers && timers.map((timer) => <Timer key={timer} id={timer} />)}
    </div>
  );
};
