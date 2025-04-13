import { PageLink } from "@/types";
import Logo from "../../public/img/logo-reverse-gradient.svg";

export const WorkTogether = () => {
  return (
    <div className="app-container pt-20" id={PageLink.AboutUs}>
      <h2 className="font-integralcf-demibold text-[90px] uppercase leading-none">
        Let s work together to hapness the power of AI and technology to achieve your goals
      </h2>
      <div className="flex justify-between gap-10 pt-24">
        {/* <Image priority quality={100} src="/img/think-ix-bg.png" alt="" width={1135} height={407} className="w-2/3" /> */}
        <div className="relative flex max-w-[70%] items-center bg-black">
          <Logo className="max-w-full" />
          <div className="absolute left-0 top-0 flex size-full">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item) => (
              <div key={item} className="grow bg-fence backdrop-blur-[30px]" />
            ))}
          </div>
          <div className="absolute left-0 top-0 size-full" />
        </div>

        <div className="flex grow flex-col gap-5 text-[18px] leading-none">
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
