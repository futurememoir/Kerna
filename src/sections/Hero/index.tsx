import { HeroLogo } from "@/sections/Hero/components/HeroLogo";
import { HeroHeadline } from "@/sections/Hero/components/HeroHeadline";
import { HeroCta } from "@/sections/Hero/components/HeroCta";

export const Hero = () => {
  return (
    <section className="[align-items:normal] box-border caret-transparent inline fill-blue-700 flex-row h-auto justify-normal min-h-0 outline-[3px] no-underline origin-[0px_0px] md:items-center md:flex md:fill-black md:flex-col md:h-[800px] md:justify-center md:min-h-[1000px] md:origin-[50%_50%]">
      <HeroLogo />
      <div className="[align-items:normal] self-auto box-border caret-transparent inline fill-indigo-500 h-auto max-w-none min-h-0 min-w-0 outline-[3px] text-start no-underline origin-[0px_0px] w-auto m-0 pt-0 px-0 md:items-center md:self-stretch md:flex md:fill-black md:h-full md:max-w-[1440px] md:min-h-[auto] md:min-w-[auto] md:text-left md:origin-[50%_50%] md:w-full md:m-auto md:pt-[30px] md:px-[55px]">
        <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] inline fill-slate-400 flex-row min-h-0 min-w-0 outline-[3px] gap-y-[normal] text-start no-underline origin-[0px_0px] md:items-start md:gap-x-[30px] md:flex md:fill-black md:flex-col md:min-h-[auto] md:min-w-[auto] md:gap-y-[30px] md:text-left md:origin-[50%_50%]">
          <HeroHeadline />
          <HeroCta />
        </div>
      </div>
    </section>
  );
};
