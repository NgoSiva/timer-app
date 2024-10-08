"use client";

import { AddTimerForm } from "./AddTimerForm";
import { Timers } from "./Timers";

export default function Home() {
  return (
    <main className="min-h-full max-w-4xl mx-auto p-4">
      <h1 className="mx-auto w-fit rounded-md bg-base-200 px-4 py-2 text-lg font-bold text-base-content">
        Timer
      </h1>
      <AddTimerForm />

      <Timers />
    </main>
  );
}
