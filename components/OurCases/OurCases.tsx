import { Slash } from "@/assets";
import { PageLink } from "@/types";
import Image from "next/image";
import { FC } from "react";

export const OurCases: FC = () => {
  return (
    <div className="flex flex-col gap-8 pt-16" id={PageLink.Cases}>
      <div className="relative z-[1] min-h-[355px]">
        <div className="app-container relative z-[1] w-full">
          <h2 className="translate-y-10 font-integralcf-demibold text-[90px] uppercase leading-none">
            <Slash className="inline-block" />
            Our cases
          </h2>
        </div>

        <Image src="/img/element-cases.png" width={428} height={550} alt="" className="absolute -top-20 right-0" />
      </div>
    </div>
  );
};
