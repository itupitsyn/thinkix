import { useDebounce } from "@uidotdev/usehooks";
import cn from "classnames";
import { FC, PropsWithChildren } from "react";

type SmoothlyOpeningBlockProps = PropsWithChildren<{
  opened?: boolean;
  forceRender?: boolean;
  className?: string;
}>;

export const SmoothlyOpeningBlock: FC<SmoothlyOpeningBlockProps> = ({ opened, forceRender, className, children }) => {
  const openedDebounced = useDebounce(opened, 150);

  return (
    <div className={cn("grid transition-[grid-template-rows]", opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
      {(opened || openedDebounced || forceRender) && (
        <div className={cn(!(opened && openedDebounced) && "overflow-hidden", className)}>{children}</div>
      )}
    </div>
  );
};
