"use client";

import { ArrowIcon } from "@/assets";
import { SmoothlyOpeningBlock } from "@/components/SmoothlyOpeningBlock";
import { FC, ReactNode, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";

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
        <div className="flex items-center gap-44">
          <div className="text-[20px]">{index}</div>

          <h3 className="bg-fuchsia-to-blue-65 bg-clip-text font-helvetica-now-regular text-[40px] uppercase text-transparent">{header}</h3>
        </div>

        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          <ArrowIcon className="h-6 w-7" />
        </button>
      </div>

      <SmoothlyOpeningBlock opened={show} className="flex justify-end" duration={700}>
        <div className="w-2/3 whitespace-pre-wrap pt-4 text-[20px] uppercase">{text}</div>
      </SmoothlyOpeningBlock>
    </div>
  );
};
