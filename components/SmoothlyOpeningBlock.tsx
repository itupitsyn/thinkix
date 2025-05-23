import cn from "classnames";
import { FC, PropsWithChildren, useEffect, useMemo, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

type SmoothlyOpeningBlockProps = PropsWithChildren<{
  opened?: boolean;
  forceRender?: boolean;
  className?: string;
  duration?: number;
}>;

export const SmoothlyOpeningBlock: FC<SmoothlyOpeningBlockProps> = ({ opened, forceRender, className, duration = 200, children }) => {
  const [openedDebounced] = useDebounceValue(opened, duration);
  const [isInProgress, setIsInProgress] = useState(false);

  useEffect(() => {
    setIsInProgress(true);
    const tmtId = setTimeout(() => {
      setIsInProgress(false);
    }, duration);

    return () => {
      clearTimeout(tmtId);
    };
  }, [duration, opened]);

  return (
    <div
      className={cn("grid transition-[grid-template-rows]", opened ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {(opened || openedDebounced || isInProgress || forceRender) && (
        <div
          className={cn(
            {
              "overflow-hidden": !openedDebounced || isInProgress,
            },
            className,
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};
