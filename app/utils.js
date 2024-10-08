export const millisecondsToHMS = (ms) => {
  return Object.assign(
    {},
    Math.floor((ms / 1000 / 3600) % 24) === 0
      ? null
      : { hrs: Math.floor((ms / 1000 / 3600) % 24) },
    { mins: Math.floor((ms / 1000 / 60) % 60) },
    { secs: Math.floor((ms / 1000) % 60) }
  );
};

export const padHMS = (time) => String(time).padStart(2, "0");
