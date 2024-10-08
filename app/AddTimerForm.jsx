import { useState } from "react";
import { useTimerStore } from "./timer.store";

export const AddTimerForm = () => {
  const [time, setTime] = useState({ hrs: "00", mins: "01", secs: "00" });
  const addTimer = useTimerStore((state) => state.addTimer);

  const formatTimeValue = (value, maxValue) => {
    const valueNumber = parseInt(value.slice(-2));
    if ((valueNumber === "" || valueNumber < 0, isNaN(valueNumber)))
      return "00";
    return Math.min(valueNumber, maxValue).toString().padStart(2, "0");
  };

  const convertToMs = ({ hrs, mins, secs }) => {
    return (Number(hrs) * 60 * 60 + Number(mins) * 60 + Number(secs)) * 1000;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const formattedValue = formatTimeValue(value, name === "hrs" ? 23 : 59);
    setTime((curr) => ({ ...curr, [name]: formattedValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ms = convertToMs(time);
    if (ms < 10000) return alert("Timer should at least 10 seconds");
    addTimer(convertToMs(time));
  };
  return (
    <form className="mx-auto w-fit my-10">
      <div className="flex w-fit rounded-md border border-neutral bg-base-200 ps-3">
        <InputField
          id="hours"
          name="hrs"
          value={time.hrs}
          label="h"
          onChange={handleInputChange}
        />
        <InputField
          id="minutes"
          name="mins"
          label="min"
          value={time.mins}
          onChange={handleInputChange}
        />
        <InputField
          id="seconds"
          name="secs"
          label="s"
          value={time.secs}
          onChange={handleInputChange}
        />
      </div>
      <button
        className="btn btn-success block ml-auto mt-4"
        onClick={handleSubmit}
      >
        Add Timer
      </button>
    </form>
  );
};

const InputField = (props) => {
  return (
    <div className="flex items-baseline me-4">
      <input
        {...props}
        className="h-20 sm:h-24 w-10 rounded-md bg-base-200 text-center text-3xl sm:text-5xl focus:bg-accent focus:text-accent-content focus:outline-none md:h-20 sm:w-20 md:text-6xl"
        type="text"
      />
      <label
        htmlFor={props.id}
        className="text-3xl sm:text-4xl md:text-5xl leading-snug"
      >
        {props.label}
      </label>
    </div>
  );
};
