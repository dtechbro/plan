"use client";

import { useEffect, useState } from "react";
const WEDDING_DATE = new Date("2025-05-25"); // Update with actual date
export default function Countdown() {

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {

      const now = new Date();
      const difference = WEDDING_DATE.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen flex flex-col items-center justify-center py-20 text-center">
      <h1 className="font-bold text-4xl mb-8 text-white">ME & HER</h1>
      <p className="mb-8 text-white">We are getting married!</p>

      <div className="flex justify-center gap-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="bg-white p-4 rounded-lg shadow-md min-w-[80px]"
          >
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-sm uppercase">{unit}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
