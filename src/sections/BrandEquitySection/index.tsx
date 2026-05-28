import { BrandEquityIntro } from "@/sections/BrandEquitySection/components/BrandEquityIntro";
import { EquityFeature } from "@/sections/BrandEquitySection/components/EquityFeature";

export const BrandEquitySection = () => {
  return (
    <section className="box-border caret-transparent inline fill-indigo-500 max-w-none outline-[3px] no-underline origin-[0px_0px] w-auto mx-0 md:block md:fill-black md:max-w-[1780px] md:origin-[50%_50%] md:w-full md:mx-auto">
      <BrandEquityIntro />
      <EquityFeature
        rootVariant="inline fill-indigo-500 h-auto max-w-none static origin-[0px_0px] w-auto z-auto border-orange-50 mt-0 mx-0 px-0 md:block md:fill-black md:h-full md:max-w-[1780px] md:relative md:origin-[50%_50%] md:w-full md:z-10 md:border-orange-200 md:-mt-px md:mx-auto"
        containerVariant="inline fill-indigo-500 static origin-[0px_0px] md:flex md:fill-black md:relative md:origin-[50%_50%]"
        contentVariant="inline fill-indigo-500 shrink min-h-0 min-w-0 origin-[0px_0px] pr-0 md:block md:fill-black md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:origin-[50%_50%] md:pr-[55px]"
        title={
          <>
            Secure investor{" "}
            <br className="box-border caret-transparent inline fill-indigo-500 text-base font-normal leading-6 outline-[3px] no-underline origin-[0px_0px] md:block md:fill-black md:text-[32px] md:font-medium md:leading-[34px] md:origin-[50%_50%]" />{" "}
            conviction
          </>
        }
        titleClassName="box-border caret-transparent inline fill-indigo-500 text-base font-normal leading-6 outline-[3px] no-underline origin-[0px_0px] md:block md:fill-black md:text-[32px] md:font-medium md:leading-[34px] md:origin-[50%_50%]"
        breakClassName="box-border caret-transparent inline fill-indigo-500 outline-[3px] no-underline origin-[0px_0px] md:block md:fill-black md:origin-[50%_50%]"
        description="Walk into every pitch with a brand that shifts the room in your favour."
        descriptionVariant="inline fill-indigo-500 text-base leading-6 origin-[0px_0px] md:block md:fill-black md:origin-[50%_50%]"
        dividerVariant="bg-transparent inline fill-indigo-500 shrink origin-[0px_0px] w-auto md:bg-orange-200 md:fill-black md:shrink-0 md:origin-[50%_50%] md:w-px"
        iconWrapperVariant="self-auto inline fill-indigo-500 h-auto justify-normal min-h-0 min-w-0 origin-[0px_0px] w-auto md:self-stretch md:flex md:fill-black md:justify-end md:min-h-[auto] md:min-w-[auto] md:origin-[50%_50%] md:w-full"
        iconInnerVariant="inline fill-indigo-500 h-auto min-h-0 min-w-0 origin-[0px_0px] md:block md:fill-black md:h-fit md:min-h-[auto] md:min-w-[auto] md:origin-[50%_50%]"
        iconSrc="https://c.animaapp.com/mpotmu5vEKkdtW/assets/icon-4.svg"
      />
      <EquityFeature
        rootVariant="box-border caret-transparent h-full max-w-[1780px] outline-[3px] relative no-underline w-full z-10 border-orange-200 -mt-px mx-auto pb-[30px] px-[30px] border-0 border-solid md:border md:pb-0 md:px-[55px]"
        containerVariant="bg-zinc-800 box-border caret-transparent flex flex-col-reverse outline-[3px] relative no-underline p-[26px] rounded-[10px] md:bg-transparent md:flex-row-reverse md:p-0 md:rounded-none"
        contentVariant="box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-auto mt-[15px] pl-0 py-0 md:w-[31.3%] md:mt-0 md:pl-[55px] md:py-[51px]"
        title="Turn users into ambassadors"
        titleClassName="box-border caret-transparent text-base font-medium leading-[17.6px] outline-[3px] no-underline md:text-[32px] md:leading-[34px]"
        breakClassName="box-border caret-transparent hidden outline-[3px] no-underline md:block"
        description="A distinctive brand turns early adopters into advocates no airdrop can buy."
        descriptionVariant="box-border caret-transparent text-sm leading-[16.8px] outline-[3px] no-underline mt-2.5 md:text-2xl md:leading-8 md:mt-0"
        dividerVariant="bg-orange-200 box-border caret-transparent hidden shrink-0 min-h-0 min-w-0 outline-[3px] no-underline w-px md:block md:min-h-[auto] md:min-w-[auto]"
        iconWrapperVariant="self-stretch box-border caret-transparent flex h-[140px] justify-center min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full pt-0 md:h-[360px] md:justify-start md:pt-[35px]"
        iconInnerVariant="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline"
        iconSrc="https://c.animaapp.com/mpotmu5vEKkdtW/assets/icon-5.svg"
      />
      <EquityFeature
        rootVariant="h-full max-w-[1780px] relative w-full z-10 border-orange-200 -mt-px mx-auto pb-[30px] px-[30px] md:pb-0"
        containerVariant="bg-zinc-800 flex flex-col-reverse relative p-[26px] rounded-[10px] md:bg-transparent md:flex-row md:p-0 md:rounded-none"
        contentVariant="shrink-0 min-h-[auto] min-w-[auto] mt-[15px] pr-0 md:mt-0 md:pr-[55px]"
        title="Attract elite talent"
        titleClassName="box-border caret-transparent text-base font-medium leading-[17.6px] outline-[3px] no-underline md:text-[32px] md:leading-[34px]"
        breakClassName="box-border caret-transparent hidden outline-[3px] no-underline md:block"
        description="The best onchain builders have options. A charismatic brand signals a future worth betting on."
        descriptionVariant="text-sm leading-[16.8px] mt-2.5 md:mt-0"
        dividerVariant="bg-orange-200 hidden shrink-0 w-px"
        iconWrapperVariant="self-stretch flex h-[140px] justify-center min-h-[auto] min-w-[auto] w-full md:justify-end"
        iconInnerVariant="block min-h-[auto] min-w-[auto]"
        iconSrc="https://c.animaapp.com/mpotmu5vEKkdtW/assets/icon-6.svg"
      />
    </section>
  );
};
