import { PageLink } from "@/types";
import Logo from "../../public/img/logo-reverse-gradient.svg";
import classNames from "classnames";
import { fontIntegralCfDemi } from "@/fonts";

export const WorkTogether = () => {
  return (
    <div className="app-container px-4 pt-20" id={PageLink.AboutUs}>
      <h2 className={classNames("text-2xl uppercase leading-none lg:text-5xl xl:text-[90px]", fontIntegralCfDemi.className)}>
        Let s work together to harness the power of AI and technology to achieve your goals
      </h2>
      <div className="flex flex-col-reverse justify-between gap-10 pt-24 lg:flex-row">
        <div className="relative flex max-w-full scale-y-[300%] items-center bg-black lg:max-w-[70%] lg:scale-y-100">
          <Logo className=" max-w-full" />
          <div className="absolute left-0 top-0 flex size-full">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
              <div key={item} className="grow bg-fence backdrop-blur-[25px]" />
            ))}
          </div>
          <div className="absolute left-0 top-0 size-full" />
        </div>

        <div className="z-[1] flex grow flex-col gap-5 text-sm leading-none lg:text-[18px]">
          <p className="max-w-[450px] self-end uppercase">
            At ThinkIX, we specialize in delivering tailored solutions to help businesses drive growth and streamline operations. As a
            boutique agency, we offer personalized service and work closely with you to develop strategies that fit your unique needs.
          </p>
          <p className="max-w-[450px] self-start uppercase">
            Our team leverages advanced AI technologies and automation to optimize processes, ensuring your business stays ahead of the
            curve. With a focus on long-term partnerships, we’re committed to delivering results that scale with your success.
          </p>
        </div>
      </div>
    </div>
  );
};
