export type StepTagsProps = {
  tags: string[];
  layoutVariant: string;
};

export const StepTags = (props: StepTagsProps) => {
  const desktopTagClassNames = [
    "bg-blue-700 box-border caret-transparent text-orange-50 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md scale-0 font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:transform-none md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px]",
    "bg-violet-200 box-border caret-transparent text-stone-800 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md scale-0 font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:transform-none md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px]",
    "bg-stone-600 box-border caret-transparent text-orange-50 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md scale-0 font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:transform-none md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px]",
    "bg-orange-200 box-border caret-transparent text-blue-700 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md scale-0 font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:transform-none md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px]",
    "bg-violet-400 box-border caret-transparent text-orange-50 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md scale-0 font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:transform-none md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px]",
    "bg-blue-700 box-border caret-transparent text-orange-200 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md scale-0 font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:transform-none md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px]",
    "bg-violet-400 box-border caret-transparent text-stone-800 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md scale-0 font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:transform-none md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px]",
  ];

  const mobileTagClassNames = [
    "bg-blue-700 box-border caret-transparent text-orange-50 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline transform-none mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px] md:scale-0",
    "bg-violet-200 box-border caret-transparent text-stone-800 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline transform-none mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px] md:scale-0",
    "bg-stone-600 box-border caret-transparent text-orange-50 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline transform-none mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px] md:scale-0",
    "bg-orange-200 box-border caret-transparent text-blue-700 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline transform-none mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px] md:scale-0",
    "bg-violet-400 box-border caret-transparent text-orange-50 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline transform-none mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px] md:scale-0",
    "bg-blue-700 box-border caret-transparent text-orange-200 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline transform-none mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px] md:scale-0",
    "bg-violet-400 box-border caret-transparent text-stone-800 inline-block shrink-0 text-sm h-fit tracking-[0.28px] leading-[14px] outline-[3px] no-underline transform-none mr-[5px] mb-0.5 pt-[5px] pb-[3px] px-[7px] rounded-md font-offbit md:text-base md:tracking-[0.32px] md:leading-4 md:mr-2.5 md:mb-2.5 md:pt-[7px] md:pb-[5px] md:px-[11px] md:scale-0",
  ];

  const isMobile = props.layoutVariant === "mobile";
  const tagClassNames = isMobile ? mobileTagClassNames : desktopTagClassNames;

  const getTagClassName = (index: number) => {
    return tagClassNames[index % tagClassNames.length] ?? tagClassNames[0];
  };

  const tagElements = props.tags.map((tag, index) => (
    <div
      className="box-border caret-transparent inline-block outline-[3px] no-underline"
      key={`${tag}-${index}`}
    >
      <div className="box-border caret-transparent outline-[3px] no-underline">
        <div className={getTagClassName(index)}>{tag}</div>
      </div>
    </div>
  ));

  if (isMobile) {
    return (
      <div className="box-border caret-transparent outline-[3px] no-underline items-center bg-stone-800 text-blue-700 hidden flex-wrap h-44 mr-[-0.5px] min-h-0 min-w-0 w-[561px] border border-stone-600 mt-[34px] px-8 py-9 border-solid md:block md:min-h-[auto] md:min-w-[auto]">
        <div className="box-border caret-transparent outline-[3px] no-underline">
          {tagElements}
        </div>
      </div>
    );
  }

  return (
    <div className="box-border caret-transparent outline-[3px] no-underline block mt-2.5 md:hidden">
      {tagElements}
    </div>
  );
};
