import { notFound } from "next/navigation";
import raw from "./data.json";
import classNames from "classnames";
import { fontHelveticaNow, fontIntegralCfDemi, notoSymbols2 } from "@/fonts";
import { GradientedLink } from "@/components/GradientedLink";
import { PageLink } from "@/types";

type Data = Record<
  string,
  {
    title: string;
    challenge: string;
    solution: string;
    benefits: string[];
    results: string[];
  }
>;

interface PageParams {
  params: { id: string };
}

export default function Page({ params }: PageParams) {
  const { id } = params;
  const data: Data = raw;
  const item = data[id];

  if (!item) {
    notFound();
  }

  return (
    <main className="app-container px-4 pb-60">
      <div className="flex flex-col-reverse items-end justify-between gap-6 pt-8 sm:flex-row sm:items-start">
        <h1
          className={classNames("max-w-[1070px] text-2xl uppercase leading-none sm:text-5xl xl:text-[80px]", fontIntegralCfDemi.className)}
        >
          {item.title}
        </h1>
        <nav className="pr-6 pt-4 uppercase">
          <GradientedLink href={`/#${PageLink.Cases}`}>/main</GradientedLink>
        </nav>
      </div>

      <div className="mt-48 grid gap-10 xl:grid-cols-3">
        <div className="flex min-h-[400px] flex-col justify-between gap-10 bg-[url(/img/bg-challenge.png)] bg-cover px-10 py-11">
          <h2 className={classNames("flex justify-between text-2xl font-medium uppercase lg:text-4xl", fontHelveticaNow.className)}>
            {"Client's Challenge:"}
            <span className={classNames("text-3xl font-normal lg:text-5xl", notoSymbols2.className)}>🡦</span>
          </h2>

          <p className="whitespace-pre-wrap uppercase leading-none lg:text-xl">{item.challenge}</p>
        </div>

        <div className="flex min-h-[400px] flex-col justify-between gap-10 bg-[url(/img/bg-solution.png)] bg-cover px-10 py-11">
          <h2 className={classNames("flex justify-between text-2xl font-medium uppercase lg:text-4xl", fontHelveticaNow.className)}>
            {"Our Solution:"}
            <span className={classNames("text-3xl font-normal lg:text-5xl", notoSymbols2.className)}>🡦</span>
          </h2>

          <p className="whitespace-pre-wrap uppercase leading-none lg:text-xl">{item.solution}</p>
        </div>

        <div className="flex min-h-[400px] flex-col justify-between gap-10 bg-[url(/img/bg-benefits.png)] bg-cover px-10 py-11">
          <h2 className={classNames("flex justify-between text-2xl font-medium uppercase lg:text-4xl", fontHelveticaNow.className)}>
            {"key Business Benefits:"}
            <span className={classNames("text-3xl font-normal lg:text-5xl", notoSymbols2.className)}>🡦</span>
          </h2>

          <ul>
            {item.benefits.map((item, idx) => (
              <li className="whitespace-pre-wrap uppercase leading-none lg:text-xl" key={idx}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-20 flex flex-col gap-10 bg-[url(/img/bg-results.png)]  bg-cover p-10">
        <h2 className={classNames("flex justify-between text-2xl font-medium uppercase lg:text-4xl", fontHelveticaNow.className)}>
          Results:
        </h2>

        <ul>
          {item.results.map((item, idx) => (
            <li className="whitespace-pre-wrap uppercase leading-none lg:text-xl" key={idx}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
