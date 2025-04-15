import { Slash } from "@/assets";
import { PageLink } from "@/types";
import Image from "next/image";
import { FC } from "react";
import { Case } from "./Case";
import data from "./data.json";
import classNames from "classnames";
import { fontIntegralCfDemi } from "@/fonts";

export const OurCases: FC = () => {
  return (
    <div className="flex flex-col gap-8 pt-16" id={PageLink.Cases}>
      <div className="relative z-[1] min-h-[355px]">
        <div className="app-container relative z-[1] w-full">
          <h2 className={classNames("translate-y-10 text-[90px] uppercase leading-none", fontIntegralCfDemi.className)}>
            <Slash className="inline-block" />
            Our cases
          </h2>
        </div>

        <Image priority src="/img/element-cases.png" width={428} height={550} alt="" className="absolute -top-20 right-0" />
      </div>

      <div className="app-container z-[1] flex w-full justify-center gap-8">
        {data.map((item) => (
          <Case key={item.id} header={item.header} id={item.id} />
        ))}
      </div>
    </div>
  );
};
