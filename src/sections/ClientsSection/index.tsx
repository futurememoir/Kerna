import { ClientLogos } from "@/sections/ClientsSection/components/ClientLogos";
import { ClientCarousel } from "@/sections/ClientsSection/components/ClientCarousel";

export const ClientsSection = () => {
  return (
    <section className="box-border caret-transparent inline fill-indigo-600 max-w-none outline-[3px] no-underline origin-[0px_0px] w-auto mx-0 px-0 md:block md:fill-black md:max-w-[1440px] md:origin-[50%_50%] md:w-full md:mx-auto md:px-[55px]">
      <ClientLogos />
      <ClientCarousel />
    </section>
  );
};
