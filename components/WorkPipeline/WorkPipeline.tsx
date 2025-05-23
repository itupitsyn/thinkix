"use client";

import { Slash, WorkPipelineImage } from "@/assets";
import data from "./data.json";
import { Step } from "./components";
import { FC, useCallback, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { GradientedButton } from "../GradientedButton";
import { PageLink } from "@/types";
import { fontIntegralCfDemi, notoSymbols2 } from "@/fonts";

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

  useEffect(() => {
    onNextClick();
  }, [onNextClick]);

  return (
    <div className="pt-28 lg:pt-56" id={PageLink.WorkPipeline}>
      <div className="app-container">
        <h2 className={classNames("px-4 text-2xl uppercase leading-none lg:text-5xl xl:text-[90px]", fontIntegralCfDemi.className)}>
          <Slash className="inline-block h-6 lg:h-10 xl:h-auto" />
          Our work pipeline
        </h2>
      </div>

      <div className="app-container px-2">
        <div
          className="relative touch-pan-y pl-52 pr-20 pt-16 lg:pt-36"
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
                className={classNames("min-h-[300px] w-[485px] flex-none select-none lg:w-[900px]", idx % 2 && "pt-24")}
                {...item}
              />
            ))}
          </div>

          <div ref={imgRef} className={classNames("absolute -left-52 bottom-0", smooth && "transition-transform duration-700")}>
            <WorkPipelineImage className="translate-x-[-17.5%] scale-x-[60%] lg:translate-x-0 lg:scale-x-100" />
          </div>
        </div>
      </div>

      <div className="app-container relative z-[1] flex justify-between gap-6 px-4 pb-20">
        <GradientedButton className="uppercase tracking-wide lg:text-2xl" onClick={onBackClick} disabled={smooth}>
          <span className={classNames("text-xl lg:text-[27px]", notoSymbols2.className)}>🡧</span>
          /back/
        </GradientedButton>

        <GradientedButton className="uppercase tracking-wide lg:text-2xl" onClick={onNextClick} disabled={smooth}>
          /next/
          <span className={classNames("text-xl lg:text-[27px]", notoSymbols2.className)}>🡦</span>
        </GradientedButton>
      </div>
    </div>
  );
};
