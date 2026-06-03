"use client";

import { useState, useEffect } from "react";

type TypewriterProps = {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  pauseDuration?: number;
};

export function Typewriter({
  text,
  speed = 100,
  deleteSpeed = 50,
  delay = 0,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [phase, setPhase] = useState<"typing" | "pausing" | "deleting" | "idle">("idle");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setPhase("typing");
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (phase === "typing") {
      if (displayedText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setPhase("deleting");
        }, pauseDuration);
      }
    } else if (phase === "deleting") {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(text.substring(0, displayedText.length - 1));
        }, deleteSpeed);
      } else {
        timeout = setTimeout(() => {
          setPhase("typing");
        }, 500); // short pause before typing again
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, phase, text, speed, deleteSpeed, pauseDuration]);

  return (
    <span className="typewriter">
      {displayedText}
      <span className="typewriter__cursor">_</span>
    </span>
  );
}
