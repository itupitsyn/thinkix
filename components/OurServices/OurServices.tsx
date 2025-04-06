import { FC } from "react";
import { Service } from "./components";
import { Slash } from "@/assets";
import Image from "next/image";
import { PageLink } from "@/types";
import data from "./data.json";

export const OurServices: FC = () => {
  return (
    <div className="flex flex-col gap-8 pt-16" id={PageLink.OurServices}>
      <div className="relative z-[1] min-h-[355px]">
        <div className="app-container w-full">
          <h2 className="translate-y-10 font-integralcf-demibold text-[90px] uppercase leading-none">
            <Slash className="inline-block" />
            Our services
          </h2>
        </div>

        <Image src="/img/element.png" width={335} height={452} alt="" className="absolute -top-20 right-0" />
      </div>

      <div className="app-container z-[1] w-full">
        {data.map((item, idx) => (
          <Service key={idx} index={`/0${idx + 1}`} header={item.header} text={item.text} />
        ))}
      </div>
    </div>
  );
};
