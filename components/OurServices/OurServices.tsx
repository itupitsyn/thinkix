import { FC } from "react";
import { Service } from "./components";
import { Slash } from "@/assets";
import Image from "next/image";
import { PageLink } from "@/types";
import data from "./data.json";
import classNames from "classnames";
import { fontIntegralCfDemi } from "@/fonts";

export const OurServices: FC = () => {
  return (
    <div className="flex flex-col gap-8 pt-16" id={PageLink.OurServices}>
      <div className="relative z-[1] min-h-[355px]">
        <div className="app-container w-full px-4">
          <h2
            className={classNames(
              "relative z-[1] translate-y-10 pt-60 text-2xl uppercase leading-none lg:pt-0 lg:text-5xl xl:text-[90px]",
              fontIntegralCfDemi.className,
            )}
          >
            <Slash className="inline-block h-6 lg:h-10 xl:h-auto" />
            Our services
          </h2>
        </div>

        <Image
          priority
          src="/img/element.png"
          width={335}
          height={452}
          alt=""
          className="absolute -top-20 right-0 h-auto w-48 lg:w-[335px]"
        />
      </div>

      <div className="app-container z-[1] flex w-full flex-col gap-8 px-4">
        {data.map((item, idx) => (
          <Service key={idx} index={`/0${idx + 1}`} header={item.header} text={item.text} />
        ))}
      </div>
    </div>
  );
};
