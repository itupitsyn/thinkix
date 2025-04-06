import { PipelineArrow } from "@/assets";
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
        <h3 className="bg-fuchsia-to-blue-65 bg-clip-text font-helvetica-now-regular text-[30px] uppercase  text-transparent">
          <span className="font-messina-mono text-[30px]">{`${index} `}</span>
          {header}
        </h3>

        <div className="flex flex-col gap-3 leading-none">
          <p className="whitespace-pre-wrap text-sm uppercase">{whatHappens}</p>
          <p className="whitespace-pre-wrap text-sm uppercase">{outcome}</p>
        </div>
      </div>
    </div>
  );
};
