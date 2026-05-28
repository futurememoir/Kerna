import { FooterBrand } from "@/sections/Footer/components/FooterBrand";
import { CalendarEmbed } from "@/sections/Footer/components/CalendarEmbed";
import { MobileFooterLinks } from "@/sections/Footer/components/MobileFooterLinks";

export const FooterContent = () => {
  return (
    <section className="[align-items:normal] bg-[oklab(0.905891_-0.0000090301_0.0588422_/_0.1)] box-border caret-transparent flex flex-col justify-between max-w-[1440px] outline-[3px] no-underline mb-5 mx-auto p-5 rounded-[20px] md:items-end md:flex-row md:max-w-[1840px] md:mb-[35px] md:p-10">
      <FooterBrand />
      <CalendarEmbed />
      <MobileFooterLinks />
    </section>
  );
};
