"use client";

import { Slash, WorkPipelineImage } from "@/assets";
import data from "./data.json";
import { Step } from "./components";
import { FC, useCallback, useRef } from "react";
import classNames from "classnames";
import { GradientedButton } from "../GradientedButton";
import { PageLink } from "@/types";

export const WorkPipeline: FC = () => {
  const shiftRef = useRef<null | number>(null);
  const transRef = useRef(0);

  const swiperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const onNextClick = useCallback(() => {
    if (!swiperRef.current) return;
  }, []);

  return (
    <div className="pt-56" id={PageLink.WorkPipeline}>
      <div className="app-container">
        <h2 className="font-integralcf-demibold text-[90px] uppercase leading-none">
          <Slash className="inline-block" />
          Our work pipeline
        </h2>
      </div>

      <div
        className="app-container relative pl-52 pr-20 pt-36"
        onPointerDown={(e) => {
          if (!swiperRef.current) return;

          shiftRef.current = e.pageX;
        }}
        onPointerMove={(e) => {
          if (!swiperRef.current || shiftRef.current === null) return;

          transRef.current += e.pageX - shiftRef.current;
          shiftRef.current = e.pageX;

          transRef.current = Math.min(Math.max(transRef.current, -swiperRef.current.scrollWidth), 0);

          swiperRef.current.style.transform = `translateX(${transRef.current}px)`;
          if (imgRef.current) {
            imgRef.current.style.transform = `translateX(${transRef.current}px)`;
          }
        }}
        onPointerUp={() => {
          shiftRef.current = null;
        }}
        onPointerLeave={() => {
          shiftRef.current = null;
        }}
      >
        <div ref={swiperRef} className="flex min-h-[578px] gap-36">
          {data.map((item, idx) => (
            <Step
              key={idx}
              index={`/0${idx + 1}`}
              className={classNames("min-h-[300px] w-[900px] flex-none select-none", idx % 2 && "pt-24")}
              {...item}
            />
          ))}
        </div>

        <div ref={imgRef} className="absolute -left-52 bottom-0">
          <WorkPipelineImage />
        </div>
      </div>

      <div className="app-container relative z-[1] flex justify-between gap-6 pb-20">
        <GradientedButton className="text-2xl uppercase tracking-wide">
          <span className="text-[27px]">🡧</span>
          /back/
        </GradientedButton>

        <GradientedButton className="text-2xl uppercase tracking-wide">
          /next/
          <span className="text-[27px]">🡦</span>
        </GradientedButton>
      </div>
    </div>
  );
};
