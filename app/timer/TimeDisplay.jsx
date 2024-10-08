import { clsx } from "clsx";
import { millisecondsToHMS, padHMS } from "../utils";

export const TimeDisplay = ({ timeLeft }) => {
  const timeHMS = millisecondsToHMS(timeLeft);
  const getTimeText = (time) => {
    const values = Object.values(millisecondsToHMS(time));
    const hmsValues = values.map((time) => padHMS(time));
    return hmsValues.join(":");
  };
  return (
    <span
      className={clsx("font-light", {
        "text-4xl": !timeHMS.hrs,
        "text-2xl": timeHMS.hrs,
      })}
    >
      {getTimeText(timeLeft)}
    </span>
  );
};
