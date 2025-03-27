import classNames from "classnames";
import { useEffect, useState } from "react";

export const LogoCursor = () => {
  const [transp, setTransp] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => setTransp((prev) => !prev), 500);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <div className={classNames("w-0.5 bg-red-500 transition-opacity", transp && "opacity-0")} />;
};
