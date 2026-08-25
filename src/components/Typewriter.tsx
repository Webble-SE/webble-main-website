"use client";

import { useEffect, useState } from "react";

const words = ["snygga", "snabba", "responsiva"];

export function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = words[index % words.length];
    const delay = deleting ? 55 : text === full ? 1600 : 110;

    const timer = window.setTimeout(() => {
      if (!deleting && text === full) {
        setDeleting(true);
        return;
      }

      if (deleting && text === "") {
        setDeleting(false);
        setIndex((value) => (value + 1) % words.length);
        return;
      }

      setText(full.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, index, text]);

  return <span className="type-caret text-red">{text || "\u00a0"}</span>;
}
