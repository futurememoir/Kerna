export const CalendarEmbed = () => {
  return (
    <div className="box-border caret-transparent table shrink-0 min-h-[auto] min-w-[auto] outline-[3px] relative no-underline w-[295px] md:w-[500px]">
      <div className="box-border caret-transparent h-[800%] outline-[3px] no-underline w-full overflow-scroll">
        <div className="box-border caret-transparent flex flex-wrap h-[800%] outline-[3px] relative no-underline w-full font-ui_sans_serif">
          <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px] no-underline w-full">
            <div className="box-border caret-transparent hidden outline-[3px] absolute no-underline left-2/4">
              <div className="items-start bg-white box-border caret-transparent grid [grid-template-areas:'meta_main_main''meta_main_main'] grid-cols-[240px_480px] grid-rows-[1fr_0fr] max-w-full min-h-[450px] outline-[3px] no-underline w-[720px] border border-gray-200 rounded-md border-solid md:grid-cols-[280px_480px] md:w-[760px]">
                <div className="box-border caret-transparent flex col-end-[meta] col-start-[meta] row-end-[meta] row-start-[meta] outline-[3px] sticky no-underline z-10 top-0">
                  <div className="box-border caret-transparent outline-[3px] relative no-underline z-10 p-6">
                    <div className="box-border caret-transparent outline-[3px] no-underline">
                      <ul className="items-center box-border caret-transparent flex list-none outline-[3px] no-underline pl-0">
                        <li className="box-border caret-transparent block outline-[3px] no-underline -mr-1">
                          <span className="items-center aspect-square bg-gray-200 box-border caret-transparent inline-flex h-6 justify-center min-h-6 min-w-6 outline-[3px] relative no-underline align-top w-6 border border-gray-200 overflow-hidden rounded-[3.35544e+07px] border-solid">
                            <div className="bg-gray-200 box-border caret-transparent h-full outline-[3px] no-underline w-full"></div>
                          </span>
                        </li>
                      </ul>
                      <p className="box-border caret-transparent text-gray-500 text-sm font-semibold leading-5 outline-[3px] no-underline mt-2"></p>
                      <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-24 rounded-sm"></div>
                      <p className="box-border caret-transparent outline-[3px] no-underline"></p>
                      <h1 className="box-border caret-transparent text-zinc-700 text-xl leading-7 outline-[3px] no-underline mt-2 mb-4 font-cal_sans">
                        <div className="bg-gray-200 box-border caret-transparent h-6 outline-[3px] no-underline w-20 rounded-sm"></div>
                      </h1>
                      <div className="box-border caret-transparent font-medium outline-[3px] no-underline">
                        <div className="items-start box-border caret-transparent text-zinc-700 flex text-sm justify-start leading-5 outline-[3px] no-underline">
                          <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-4 mr-2 rounded-[3.35544e+07px]"></div>
                          <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-10 rounded-sm"></div>
                        </div>
                        <div className="items-start box-border caret-transparent text-zinc-700 flex text-sm justify-start leading-5 outline-[3px] no-underline mt-3">
                          <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-4 mr-2 rounded-[3.35544e+07px]"></div>
                          <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-20 mr-1 rounded-sm"></div>
                          <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-4 rounded-sm"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="box-border caret-transparent col-end-[main] col-start-[main] row-end-[main] row-start-[main] h-full outline-[3px] no-underline w-auto border-orange-50 -ml-px px-5 py-3 border-l-0 border-solid md:w-[480px] md:border-gray-200 md:border-l">
                  <div className="box-border caret-transparent outline-[3px] no-underline">
                    <div className="items-center box-border caret-transparent flex text-xl justify-between leading-7 outline-[3px] no-underline mb-1">
                      <span className="box-border caret-transparent text-zinc-700 block text-base leading-6 outline-[3px] no-underline w-6/12">
                        <time className="box-border caret-transparent outline-[3px] no-underline">
                          <span className="box-border caret-transparent text-zinc-950 font-semibold outline-[3px] no-underline">
                            <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-20 rounded-sm"></div>
                          </span>
                        </time>
                      </span>
                      <div className="box-border caret-transparent text-zinc-950 outline-[3px] no-underline">
                        <div className="box-border caret-transparent flex outline-[3px] no-underline">
                          <button
                            aria-label="View previous month"
                            type="button"
                            className="items-center bg-transparent caret-transparent text-gray-500 gap-x-1 flex text-sm font-medium justify-center leading-[14px] min-h-9 min-w-9 opacity-30 outline-[3px] relative gap-y-1 text-center no-underline text-nowrap border p-2 rounded-[10px] border-transparent"
                          >
                            <img
                              src="https://c.animaapp.com/mpotmu5vEKkdtW/assets/icon-8.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-4 outline-[3px] no-underline text-nowrap w-4"
                            />
                            <div className="box-border caret-transparent contents outline-[3px] no-underline text-nowrap"></div>
                          </button>
                          <button
                            aria-label="View next month"
                            type="button"
                            className="items-center bg-transparent caret-transparent text-gray-500 gap-x-1 flex text-sm font-medium justify-center leading-[14px] min-h-9 min-w-9 opacity-70 outline-[3px] relative gap-y-1 text-center no-underline text-nowrap border p-2 rounded-[10px] border-transparent"
                          >
                            <img
                              src="https://c.animaapp.com/mpotmu5vEKkdtW/assets/icon-9.svg"
                              alt="Icon"
                              className="box-border caret-transparent h-4 outline-[3px] no-underline text-nowrap w-4"
                            />
                            <div className="box-border caret-transparent contents outline-[3px] no-underline text-nowrap"></div>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent gap-x-4 grid grid-cols-[repeat(7,minmax(0px,1fr))] outline-[3px] gap-y-4 text-center no-underline border-gray-200 mb-2 border-b border-t border-solid md:mb-0 md:border-y-0">
                      <div className="box-border caret-transparent text-zinc-950 text-xs font-medium tracking-[1.2px] leading-4 outline-[3px] no-underline uppercase my-4">
                        <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-8 rounded-sm"></div>
                      </div>
                      <div className="box-border caret-transparent text-zinc-950 text-xs font-medium tracking-[1.2px] leading-4 outline-[3px] no-underline uppercase my-4">
                        <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-8 rounded-sm"></div>
                      </div>
                      <div className="box-border caret-transparent text-zinc-950 text-xs font-medium tracking-[1.2px] leading-4 outline-[3px] no-underline uppercase my-4">
                        <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-8 rounded-sm"></div>
                      </div>
                      <div className="box-border caret-transparent text-zinc-950 text-xs font-medium tracking-[1.2px] leading-4 outline-[3px] no-underline uppercase my-4">
                        <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-8 rounded-sm"></div>
                      </div>
                      <div className="box-border caret-transparent text-zinc-950 text-xs font-medium tracking-[1.2px] leading-4 outline-[3px] no-underline uppercase my-4">
                        <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-8 rounded-sm"></div>
                      </div>
                      <div className="box-border caret-transparent text-zinc-950 text-xs font-medium tracking-[1.2px] leading-4 outline-[3px] no-underline uppercase my-4">
                        <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-8 rounded-sm"></div>
                      </div>
                      <div className="box-border caret-transparent text-zinc-950 text-xs font-medium tracking-[1.2px] leading-4 outline-[3px] no-underline uppercase my-4">
                        <div className="bg-gray-200 box-border caret-transparent h-4 outline-[3px] no-underline w-8 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="box-border caret-transparent gap-x-1 grid grid-cols-[repeat(7,minmax(0px,1fr))] grid-rows-[repeat(6,minmax(0px,1fr))] outline-[3px] relative gap-y-1 text-center no-underline">
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]">
                        <button className="items-center bg-neutral-100 caret-transparent text-gray-400 flex font-medium justify-center opacity-90 outline-[3px] absolute no-underline w-full mx-auto p-0 rounded-sm inset-0">
                          <span className="bg-gray-200 box-border caret-transparent block h-9 outline-[3px] no-underline w-9 rounded-md before:accent-auto before:box-border before:caret-transparent before:text-gray-400 before:inline-block before:text-base before:not-italic before:normal-nums before:font-medium before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-ui_sans_serif"></span>
                        </button>
                      </div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                      <div className="box-border caret-transparent outline-[3px] relative no-underline w-full pt-[100%]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent outline-[3px] absolute no-underline left-2/4 top-2/4">
              <div className="box-border caret-transparent hidden outline-[3px] relative no-underline">
                <div
                  role="status"
                  aria-label="Loading"
                  className="box-border caret-transparent h-[30px] outline-[3px] relative no-underline w-[30px]"
                >
                  <img
                    src="https://c.animaapp.com/mpotmu5vEKkdtW/assets/icon-10.svg"
                    alt="Icon"
                    className="box-border caret-transparent h-[30px] outline-[3px] no-underline w-[30px]"
                  />
                </div>
              </div>
              <div className="box-border caret-transparent hidden outline-[3px] no-underline">
                Something went wrong.
              </div>
            </div>
          </div>
          <iframe
            name="cal-embed=30min"
            title="Book a call"
            src="https://app.cal.com/leopold-biget/30min/embed?layout=month_view&useSlotsViewOnSmallScreen=true&embedType=inline&ui.color-scheme=dark&embed=30min"
            className="box-border caret-transparent h-[516px] min-h-[300px] min-w-[auto] outline-[3px] no-underline w-full mx-auto md:h-[388px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
