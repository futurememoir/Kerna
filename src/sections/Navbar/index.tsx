import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavigationMenu } from "@/sections/Navbar/components/NavigationMenu";

export const Navbar = () => {
  return (
    <div className="box-border caret-transparent fill-zinc-800 outline-[3px] no-underline origin-[0px_0px] md:fill-black md:origin-[50%_50%]">
      <div className="[align-items:normal] box-border caret-transparent inline fill-zinc-800 justify-normal outline-[3px] static no-underline origin-[0px_0px] z-auto overflow-visible left-auto bottom-auto md:items-center md:flex md:fill-black md:justify-center md:fixed md:origin-[50%_50%] md:z-[1000] md:overflow-hidden md:left-2/4 md:bottom-[35px]">
        <NavbarLogo />
        <NavigationMenu />
      </div>
    </div>
  );
};
