import { StatementHeadline } from "@/sections/StatementSection/components/StatementHeadline";

export const StatementSection = () => {
  return (
    <section className="items-center box-border caret-transparent flex justify-center min-h-0 outline-[3px] no-underline border-[oklab(0.905891_-0.0000090301_0.0588422_/_0.1)] py-[200px] border-t border-solid md:min-h-[900px] md:py-[300px] md:border-t-0">
      <StatementHeadline />
    </section>
  );
};
