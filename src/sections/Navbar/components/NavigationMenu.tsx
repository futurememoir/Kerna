import { NavigationLinks } from "@/sections/Navbar/components/NavigationLinks";

export const NavigationMenu = () => {
  return (
    <div className="self-auto box-border caret-transparent inline fill-zinc-800 min-h-0 min-w-0 outline-[3px] no-underline origin-[0px_0px] w-auto overflow-visible ml-0 rounded-none md:self-stretch md:flex md:fill-black md:min-h-[auto] md:min-w-[auto] md:origin-[50%_50%] md:w-0 md:overflow-hidden md:ml-[5px] md:rounded-[10px]">
      <div className="[align-items:normal] self-auto bg-transparent shadow-none box-border caret-transparent inline fill-zinc-800 basis-auto grow-0 shrink h-auto justify-normal min-h-0 min-w-0 outline-[3px] no-underline origin-[0px_0px] w-auto border-orange-50 p-0 rounded-none border-0 border-solid md:items-center md:self-stretch md:bg-stone-800 md:shadow-[rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0)_0px_0px_0px_0px,rgba(0,0,0,0.1)_0px_4px_6px_-1px,rgba(0,0,0,0.1)_0px_2px_4px_-2px] md:flex md:fill-black md:basis-[0%] md:grow md:shrink-0 md:h-full md:justify-between md:min-h-[auto] md:min-w-[auto] md:origin-[50%_50%] md:w-full md:border md:px-[4.5px] md:py-[5px] md:rounded-[10px] md:border-[oklab(0.975321_0.00279891_0.0132784_/_0.1)]">
        <div className="bg-transparent box-border caret-transparent inline fill-zinc-800 h-auto outline-[3px] static no-underline transform-none origin-[0px_0px] w-auto mt-0 rounded-none md:bg-blue-700 md:block md:fill-black md:h-[calc(100%_-_10px)] md:mt-[-0.5px] md:absolute md:origin-[50%_50%] md:w-0 md:rounded-[7.5px] md:scale-0"></div>
        <NavigationLinks />
      </div>
    </div>
  );
};
