"use client";

import { Slash, WorkPipelineImage } from "@/assets";
import data from "./data.json";
import { Step } from "./components";
import { FC, useCallback, useRef, useState } from "react";
import classNames from "classnames";
import { GradientedButton } from "../GradientedButton";
import { PageLink } from "@/types";
import { fontIntegralCfDemi } from "@/fonts";

export const WorkPipeline: FC = () => {
  const [smooth, setSmooth] = useState(false);

  const shiftRef = useRef<null | number>(null);
  const transRef = useRef(0);

  const swiperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  const onNextClick = useCallback(() => {
    const container = swiperRef.current?.parentElement;
    if (!container) return;

    const elements = swiperRef.current.childNodes;

    const rect = container.getBoundingClientRect();

    for (let i = 0; i < elements.length; i += 1) {
      const current = elements[i];
      if (!(current instanceof HTMLElement)) continue;

      const currentRect = current.getBoundingClientRect();

      if (rect.x < currentRect.x) {
        setSmooth(true);
        setTimeout(() => setSmooth(false), 700);
        const shift = currentRect.x - rect.x;

        transRef.current -= shift;

        swiperRef.current.style.transform = `translateX(${transRef.current}px)`;
        if (imgRef.current) {
          imgRef.current.style.transform = `translateX(${transRef.current}px)`;
        }

        break;
      }
    }
  }, []);

  const onBackClick = useCallback(() => {
    const container = swiperRef.current?.parentElement;
    if (!container) return;

    const elements = swiperRef.current.childNodes;

    const rect = container.getBoundingClientRect();

    for (let i = elements.length - 1; i >= 0; i -= 1) {
      const current = elements[i];
      if (!(current instanceof HTMLElement)) continue;

      const currentRect = current.getBoundingClientRect();

      if (rect.x > currentRect.x) {
        setSmooth(true);
        setTimeout(() => setSmooth(false), 700);

        const shift = currentRect.x - rect.x;

        transRef.current -= shift;

        swiperRef.current.style.transform = `translateX(${transRef.current}px)`;
        if (imgRef.current) {
          imgRef.current.style.transform = `translateX(${transRef.current}px)`;
        }

        break;
      }
    }
  }, []);

  return (
    <div className="pt-56" id={PageLink.WorkPipeline}>
      <div className="app-container">
        <h2 className={classNames("text-[90px] uppercase leading-none", fontIntegralCfDemi.className)}>
          <Slash className="inline-block" />
          Our work pipeline
        </h2>
      </div>

      <div
        className="app-container relative pl-52 pr-20 pt-36"
        onPointerDown={(e) => {
          if (smooth) return;
          if (!swiperRef.current) return;

          shiftRef.current = e.pageX;
        }}
        onPointerMove={(e) => {
          if (smooth) return;
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
        <div ref={swiperRef} className={classNames("flex min-h-[578px] gap-36", smooth && "transition-transform duration-700")}>
          {data.map((item, idx) => (
            <Step
              key={idx}
              index={`/0${idx + 1}`}
              className={classNames("min-h-[300px] w-[900px] flex-none select-none", idx % 2 && "pt-24")}
              {...item}
            />
          ))}
        </div>

        <div ref={imgRef} className={classNames("absolute -left-52 bottom-0", smooth && "transition-transform duration-700")}>
          <WorkPipelineImage />
        </div>
      </div>

      <div className="app-container relative z-[1] flex justify-between gap-6 pb-20">
        <GradientedButton className="text-2xl uppercase tracking-wide" onClick={onBackClick} disabled={smooth}>
          <span className="text-[27px]">🡧</span>
          /back/
        </GradientedButton>

        <GradientedButton className="text-2xl uppercase tracking-wide" onClick={onNextClick} disabled={smooth}>
          /next/
          <span className="text-[27px]">🡦</span>
        </GradientedButton>
      </div>
    </div>
  );
};
