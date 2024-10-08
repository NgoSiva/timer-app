import { create, useStore } from "zustand";
import { persist } from "zustand/middleware";

export const useTimerStore = create(
  persist(
    (set) => ({
      timers: [],
      addTimer: (duration) => {
        set((state) => ({
          timers: [
            ...state.timers,
            {
              id: Date.now(),
              duration,
              timeLeft: duration,
              endAt: Date.now() + duration,
              isRunning: true,
            },
          ],
        }));
      },
      removeTimer: (id) => {
        set((state) => ({
          timers: state.timers.filter((timer) => timer.id !== id),
        }));
      },
      toggleRunning: (id) => {
        set((state) => ({
          timers: state.timers.map((timer) => {
            if (timer.id !== id) return timer;
            if (!timer.isRunning && timer.timeLeft === 0) {
              return {
                ...timer,
                timeLeft: timer.duration,
                isRunning: true,
                endAt: Date.now() + timer.duration,
              };
            }
            return {
              ...timer,
              isRunning: !timer.isRunning,
              endAt: Date.now() + timer.timeLeft,
            };
          }),
        }));
      },
    }),
    { name: "timer-storage" }
  )
);
