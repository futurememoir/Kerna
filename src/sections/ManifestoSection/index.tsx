import { ManifestoText } from "@/sections/ManifestoSection/components/ManifestoText";

export const ManifestoSection = () => {
  return (
    <section className="items-center box-border caret-transparent flex justify-center min-h-[900px] outline-[3px] no-underline py-[200px]">
      <div className="box-border caret-transparent max-w-[1080px] min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full mx-auto px-[45px] md:px-[55px]">
        <div className="items-center box-border caret-transparent flex flex-col justify-center outline-[3px] no-underline">
          <h1 className="box-border caret-transparent text-3xl font-medium leading-9 min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full md:text-5xl md:leading-[57.6px]">
            Our Manifesto
          </h1>
          <br className="box-border caret-transparent hidden min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto]" />
          <br className="box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] no-underline" />
          <ManifestoText />
        </div>
      </div>
    </section>
  );
};
