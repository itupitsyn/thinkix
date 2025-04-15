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
    <div className={classNames("flex gap-32", className)}>
      <PipelineArrow className="mt-2 flex-none" />

      <div>
        <h3
          className={classNames("bg-fuchsia-to-blue-65 bg-clip-text text-[30px] uppercase  text-transparent", fontHelveticaNow.className)}
        >
          <span className={classNames("text-[30px]", fontMessinaMono.className)}>{`${index} `}</span>
          {header}
        </h3>

        <div className="mt-11 flex flex-col gap-3 leading-none">
          <p className="whitespace-pre-wrap text-sm uppercase">{whatHappens}</p>
          <p className="whitespace-pre-wrap text-sm uppercase">{outcome}</p>
        </div>
      </div>
    </div>
  );
};
