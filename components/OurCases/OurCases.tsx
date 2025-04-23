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
      <div className="relative z-[1] min-h-[200px] lg:min-h-[355px]">
        <div className="app-container relative z-[1] w-full">
          <h2
            className={classNames(
              "translate-y-10 text-2xl uppercase leading-none lg:text-5xl xl:text-[90px]",
              fontIntegralCfDemi.className,
            )}
          >
            <Slash className="inline-block h-6 lg:h-10 xl:h-auto" />
            Our cases
          </h2>
        </div>

        <Image
          priority
          src="/img/element-cases.png"
          width={428}
          height={550}
          alt=""
          className="absolute right-0 h-[250px] w-auto lg:-top-20 lg:h-[550px]"
        />
      </div>

      <div className="app-container z-[1] flex w-full flex-wrap justify-center gap-4 lg:gap-8">
        {data.map((item) => (
          <Case key={item.id} header={item.header} id={item.id} />
        ))}
      </div>
    </div>
  );
};
