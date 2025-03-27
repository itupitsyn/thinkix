"use client";

import { useEffect, useState } from "react";
import { LogoCursor } from "./LogoCursor";

const TARGET_STRING = "ThinkIX";

export const MainPageHeader = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx >= TARGET_STRING.length) return;
    const tmtId = setTimeout(
      () => {
        setIdx((prev) => prev + 1);
      },
      idx === 3 ? 1000 : 100,
    );

    return () => {
      clearTimeout(tmtId);
    };
  }, [idx]);

  return (
    <div className="flex gap-1  pt-10">
      <h1 className="bg-gradient-to-r from-[#ed5c9f] via-[#be3ff7] to-[#5794ed] bg-clip-text font-vivl-rail text-6xl text-transparent">
        {TARGET_STRING.slice(0, idx) || "\u00A0"}
      </h1>

      <LogoCursor />
    </div>
  );
};
