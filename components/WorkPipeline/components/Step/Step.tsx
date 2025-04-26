import { PipelineArrow } from "@/assets";
import { fontHelveticaNow, fontMessinaMono } from "@/fonts";
import classNames from "classnames";
import { FC } from "react";

interface StepProps {
  header: string;
  whatHappens: string;
  outcome: string;
  index: string;
  className?: string;
}

export const Step: FC<StepProps> = ({ header, index, whatHappens, outcome, className }) => {
  return (
    <div className={classNames("flex gap-2 lg:gap-32", className)}>
      <PipelineArrow className="mt-2 flex-none" />

      <div className="pr-32 sm:pr-0">
        <h3
          className={classNames(
            "mt-2 bg-fuchsia-to-blue-65 bg-clip-text text-xl uppercase text-transparent lg:mt-0 lg:text-[30px]",
            fontHelveticaNow.className,
          )}
        >
          <span className={classNames("text-xl lg:text-[30px]", fontMessinaMono.className)}>{`${index} `}</span>
          {header}
        </h3>

        <div className="mt-11 flex flex-col gap-3 leading-none">
          <p className="whitespace-pre-wrap text-xs uppercase leading-none lg:text-sm">{whatHappens}</p>
          <p className="whitespace-pre-wrap text-xs uppercase leading-none lg:text-sm">{outcome}</p>
        </div>
      </div>
    </div>
  );
};
