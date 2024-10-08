import { Bell } from "lucide-react";
import { useTimerStore } from "./timer.store";
import { CircleSvg } from "./CircleSvg";
import { TimerRemoveButton } from "./timer/TimerRemoveButton";
import { TimerControlButton } from "./timer/TimerControlButton";
import { clsx } from "clsx";
import { TimeDisplay } from "./timer/TimeDisplay";
import { DurationDisplay } from "./timer/DurationDisplay";

export const Timer = ({ id }) => {
  const timer = useTimerStore((store) =>
    store.timers.find((timer) => timer.id === id)
  );
  const endAt = new Date(timer.endAt);

  const getPercentage = (timeLeft, duration) => {
    return (duration - timeLeft) / duration;
  };

  return (
    <div
      className={clsx("relative p-4 bg-base-200 rounded-lg size-[224px]", {
        "brightness-75": timer.timeLeft === 0,
      })}
    >
      <div className="flex flex-col items-center justify-center relative size-full">
        <div className="absolute left-0 top-0 right-0 bottom-0">
          <CircleSvg
            percentage={getPercentage(timer.timeLeft, timer.duration)}
          />
        </div>

        <div className="flex items-center">
          <Bell size={16} className="text-neutral-content" />
          <span>{`${endAt.getHours()}:${endAt
            .getMinutes()
            .toString()
            .padStart(2, "0")}`}</span>
        </div>
        <TimeDisplay timeLeft={timer.timeLeft} />
        <DurationDisplay duration={timer.duration} />
      </div>
      <TimerRemoveButton id={timer.id} />
      <TimerControlButton
        id={timer.id}
        isRunning={timer.isRunning}
        timeLeft={timer.timeLeft}
      />
    </div>
  );
};
