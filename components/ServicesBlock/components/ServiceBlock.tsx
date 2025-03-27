"use client";

import { SmoothlyOpeningBlock } from "@/components/SmoothlyOpeningBlock";
import { FC, ReactNode, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import { HiOutlineMinus } from "react-icons/hi";

interface ServicesBlockProps {
  header: string;
  text: ReactNode;
}

export const ServiceBlock: FC<ServicesBlockProps> = ({ header, text }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-[40px] bg-gradient-to-r from-[#ed5c9f] via-[#be3ff7] to-[#5794ed] p-6">
      <div className="flex justify-between gap-6">
        <h3 className="text-2xl">{header}</h3>

        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          {show ? <HiOutlineMinus className="size-8" /> : <BsPlusLg className="size-8" />}
        </button>
      </div>

      <SmoothlyOpeningBlock opened={show}>
        <div className="whitespace-pre-wrap pt-4">{text}</div>
      </SmoothlyOpeningBlock>
    </div>
  );
};
