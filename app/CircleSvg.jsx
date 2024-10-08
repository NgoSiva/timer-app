import clsx from "clsx";

export const CircleSvg = ({ percentage, isRunning }) => {
  const max = "282.6";
  const getOffset = (percentage, max) => {
    const maxValue = Number(max);
    const value = percentage * maxValue;
    return (maxValue - value).toString();
  };
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="text-neutral-content"
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        className="text-primary"
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray={max}
        strokeDashoffset={getOffset(percentage, max)}
        transform="rotate(-90 50 50)"
      ></circle>
    </svg>
  );
};
