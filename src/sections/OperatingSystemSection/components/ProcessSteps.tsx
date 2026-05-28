import { ProcessStep } from "@/sections/OperatingSystemSection/components/ProcessStep";

export const ProcessSteps = () => {
  return (
    <div className="box-border caret-transparent max-w-[1406px] outline-[3px] relative no-underline mx-auto">
      <div className="box-border caret-transparent outline-[3px] no-underline ml-[1.5px]">
        <ProcessStep
          stepNumber="1"
          title="Strategy & Verbal Identity"
          description="Positioning and messaging that opens doors you couldn't before."
          tags={[
            "Competitive Landscape",
            "ICP",
            "Category Design",
            "Brand Positioning",
            "GTM Strategy",
            "Investor Narrative",
            "Messaging Architecture",
          ]}
        />
        <ProcessStep
          stepNumber="2"
          title="Visual Identity & Design System"
          description=" A visual identity that wins the room before you say a word. "
          tags={[
            "Logomark",
            "Logotype",
            "Color Palette",
            "Typography",
            "Iconography",
            "Imagery",
            "Brand Guidelines",
            "Texture",
            "Do's & Dont's",
          ]}
        />
        <ProcessStep
          stepNumber="3"
          title="Brand Deployment"
          description=" Ship your brand across every touchpoint and build brand equity. "
          tags={[
            "Pitch Deck Template",
            "Investor Brief",
            "Media Kit",
            "Website Design & Development",
            "Explainer Video",
            "Motion System",
          ]}
        />
        <ProcessStep
          stepNumber="4"
          title="Brand Stewardship"
          description="Ongoing partnership that compounds your brand equity over time."
          tags={[
            "Continuous Brand Advisory",
            "Announcement & Campaign Messaging",
            "Asset Creation",
            "Motion Design",
            "Design System Evolution",
          ]}
        />
      </div>
      <div className="box-border caret-transparent h-full opacity-0 outline-[3px] pointer-events-none absolute no-underline w-full left-0 top-0 md:opacity-100">
        <div className="bg-transparent box-content caret-black h-auto outline-0 static w-auto left-auto top-auto md:aspect-auto md:bg-zinc-300 md:box-border md:caret-transparent md:h-[735px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:absolute md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-2 md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto] md:left-[641px] md:top-[70px]"></div>
        <div className="bg-transparent box-content caret-black h-auto outline-0 static w-auto rounded-none left-auto top-auto md:aspect-auto md:bg-blue-700 md:box-border md:caret-transparent md:h-0 md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:absolute md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-[9px] md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:left-[641px] md:top-[70px]"></div>
        <div className="bg-transparent box-content caret-black h-auto outline-0 static w-auto rounded-none left-auto top-auto md:aspect-auto md:bg-zinc-300 md:box-border md:caret-transparent md:h-[25px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:absolute md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-[25px] md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:left-[641px] md:top-[70px]"></div>
        <div className="bg-transparent box-content caret-black h-auto outline-0 static w-auto rounded-none left-auto top-auto md:aspect-auto md:bg-zinc-300 md:box-border md:caret-transparent md:h-[25px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:absolute md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-[25px] md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:left-[641px] md:top-[315px]"></div>
        <div className="bg-transparent box-content caret-black h-auto outline-0 static w-auto rounded-none left-auto top-auto md:aspect-auto md:bg-zinc-300 md:box-border md:caret-transparent md:h-[25px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:absolute md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-[25px] md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:left-[641px] md:top-[560px]"></div>
        <div className="bg-transparent box-content caret-black h-auto outline-0 static w-auto rounded-none left-auto top-auto md:aspect-auto md:bg-zinc-300 md:box-border md:caret-transparent md:h-[25px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:absolute md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-[25px] md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto] md:rounded-[3.35544e+07px] md:left-[641px] md:top-[805px]"></div>
      </div>
    </div>
  );
};
