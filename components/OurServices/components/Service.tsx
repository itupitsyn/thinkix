"use client";

import { GradientedButton } from "@/components/GradientedButton";
import { SmoothlyOpeningBlock } from "@/components/SmoothlyOpeningBlock";
import { fontHelveticaNow, notoSymbols2 } from "@/fonts";
import classNames from "classnames";
import { FC, ReactNode, useState } from "react";

interface ServiceProps {
  index: string;
  header: string;
  text: ReactNode;
}

export const Service: FC<ServiceProps> = ({ index, header, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="">
      <div className="flex max-w-[1200px] justify-between gap-6">
        <div className="flex items-start gap-5 text-xl lg:items-center lg:gap-44">
          <div className="leading-none lg:text-[20px]">{index}</div>

          <h3
            className={classNames(
              "bg-fuchsia-to-blue-65 bg-clip-text uppercase leading-none text-transparent lg:text-[40px]",
              fontHelveticaNow.className,
            )}
          >
            {header}
          </h3>
        </div>

        <GradientedButton
          onClick={() => {
            setShow((prev) => !prev);
          }}
          className={classNames(
            "self-start text-2xl leading-none transition-transform duration-700 lg:self-stretch lg:text-[40px]",
            notoSymbols2.className,
            show && "-rotate-90",
          )}
        >
          🡦
        </GradientedButton>
      </div>

      <SmoothlyOpeningBlock opened={show} className="flex justify-end" duration={700}>
        <div className="whitespace-pre-wrap pt-4 text-sm uppercase leading-none lg:w-2/3 lg:text-[20px]">{text}</div>
      </SmoothlyOpeningBlock>
    </div>
  );
};
