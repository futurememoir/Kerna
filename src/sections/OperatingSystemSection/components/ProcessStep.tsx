import { StepTags } from "@/sections/OperatingSystemSection/components/StepTags";

export type ProcessStepProps = {
  stepNumber: string;
  title: string;
  description: string;
  tags: string[];
};

export const ProcessStep = (props: ProcessStepProps) => {
  return (
    <div className="box-border caret-transparent block outline-[3px] relative no-underline">
      <div className="box-border caret-transparent flex justify-between outline-[3px] no-underline -ml-px md:ml-0">
        <div className="bg-orange-200 box-border caret-transparent text-blue-700 flex h-[211px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[calc(-12px_+_round(up,95%_-_20px,35px))] border border-stone-600 overflow-hidden mt-[34px] border-solid md:h-44 md:w-[561px]">
          <div className="items-center box-border caret-transparent flex shrink-0 text-[100px] justify-center tracking-[2px] leading-[150px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[561px] px-0 font-offbit md:text-[150px] md:tracking-[3px] md:leading-[225px] md:px-[30px]">
            <span className="box-border caret-transparent block text-[100px] tracking-[2px] leading-[50px] min-h-[auto] min-w-[auto] outline-[3px] no-underline pt-[30px] md:text-[150px] md:tracking-[3px] md:leading-[75px]">
              {props.stepNumber}
            </span>
          </div>
          <div className="bg-stone-800 box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-[calc(100%_-_92px)] pl-[15px] pr-2.5 py-[15px] md:w-[calc(100%_-_140.5px)] md:px-[35px] md:py-[33px]">
            <h4 className="box-border caret-transparent text-orange-50 text-base font-medium leading-4 outline-[3px] no-underline md:text-2xl md:leading-6">
              {props.title}
            </h4>
            <p className="box-border caret-transparent text-orange-200 text-sm leading-[15.4px] outline-[3px] no-underline mt-2.5 md:text-xl md:leading-5 md:mt-5">
              {props.description}
            </p>
            <StepTags tags={props.tags} layoutVariant="desktop" />
          </div>
        </div>
        <StepTags tags={props.tags} layoutVariant="mobile" />
      </div>
    </div>
  );
};
