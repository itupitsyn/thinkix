import Image from "next/image";
import { OrderModal } from "../OrderModal";
import { PageLink } from "@/types";
import classNames from "classnames";
import { fontIntegralCfDemi } from "@/fonts";

export const MainPageHeader = () => {
  return (
    <div id={PageLink.Home} className="app-container px-4">
      <div className="flex min-h-[450px] flex-col justify-center sm:min-h-[900px]">
        {<div className="pb-4 text-xs uppercase sm:text-lg xl:hidden">Automate Your Business with AI: Unlock Efficiency and Growth</div>}

        <Image priority width={949} height={158} alt="logo" src="img/logo.svg" />

        <div
          className={classNames(
            "flex gap-5 self-end text-5xl sm:gap-10 sm:text-[150px] sm:leading-[75px] lg:ml-[352px] lg:gap-20 lg:self-auto lg:text-[200px] lg:leading-[100px] lg:tracking-[-6px]",
            fontIntegralCfDemi.className,
          )}
        >
          <span>AI</span>
          <span>LAB</span>
        </div>
      </div>

      <div className="flex items-end justify-between">
        <OrderModal />
        {<div className="hidden text-lg uppercase xl:block">Automate Your Business with AI: Unlock Efficiency and Growth</div>}
      </div>
    </div>
  );
};
