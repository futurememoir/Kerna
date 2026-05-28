import { Navbar } from "@/sections/Navbar";
import { Hero } from "@/sections/Hero";
import { ClientsSection } from "@/sections/ClientsSection";
import { BrandEquitySection } from "@/sections/BrandEquitySection";
import { StatementSection } from "@/sections/StatementSection";
import { OperatingSystemSection } from "@/sections/OperatingSystemSection";
import { ManifestoSection } from "@/sections/ManifestoSection";
import { Footer } from "@/sections/Footer";

export const App = () => {
  return (
    <body className="accent-auto bg-transparent box-border caret-transparent text-orange-50 block fill-none text-base not-italic normal-nums font-normal h-[279px] tracking-[normal] leading-6 list-outside list-disc max-w-none min-h-0 outline-[3px] overflow-x-hidden overflow-y-hidden pointer-events-auto static scroll-auto text-start no-underline indent-[0px] normal-case align-middle visible w-[512px] border-separate font-instrument_sans md:bg-stone-800 md:fill-black md:h-auto md:max-w-screen-xl md:min-h-[1000px] md:overflow-y-auto md:relative md:scroll-smooth md:align-baseline md:w-auto">
      <div className="box-border caret-transparent fill-zinc-800 outline-[3px] no-underline origin-[0px_0px] md:fill-black md:origin-[50%_50%]"></div>
      <main className="box-border caret-transparent inline fill-zinc-800 outline-[3px] no-underline origin-[0px_0px] md:block md:fill-black md:origin-[50%_50%]">
        <div className="box-border caret-transparent fill-zinc-800 outline-[3px] no-underline origin-[0px_0px] md:fill-black md:origin-[50%_50%]"></div>
        <Navbar />
        <Hero />
        <ClientsSection />
        <BrandEquitySection />
        <StatementSection />
        <OperatingSystemSection />
        <ManifestoSection />
        <Footer />
      </main>
    </body>
  );
};
