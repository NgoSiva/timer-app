import { millisecondsToHMS } from "../utils";

export const DurationDisplay = ({ duration }) => {
  const getDurationText = (duration) => {
    const objectHMS = millisecondsToHMS(duration);
    const result = Object.entries(objectHMS).find(
      ([key, value]) => value !== 0
    );

    return `${result[1]} ${result[0]}`;
  };
  return <span>{getDurationText(duration)}</span>;
};
