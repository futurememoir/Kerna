export type EquityFeatureProps = {
  rootVariant: string;
  containerVariant: string;
  contentVariant: string;
  title: React.ReactNode;
  titleClassName: string;
  breakClassName: string;
  description: string;
  descriptionVariant: string;
  dividerVariant: string;
  iconWrapperVariant: string;
  iconInnerVariant: string;
  iconSrc: string;
};

export const EquityFeature = (props: EquityFeatureProps) => {
  return (
    <div
      className={`box-border caret-transparent outline-[3px] no-underline border-0 border-solid md:border md:px-[55px] ${props.rootVariant}`}
    >
      <div
        className={`box-border caret-transparent outline-[3px] no-underline ${props.containerVariant}`}
      >
        <div
          className={`box-border caret-transparent outline-[3px] no-underline w-auto py-0 md:w-[31.3%] md:py-[51px] ${props.contentVariant}`}
        >
          <h3 className={props.titleClassName}>{props.title}</h3>
          <br className={props.breakClassName} />
          <p
            className={`box-border caret-transparent outline-[3px] no-underline md:text-2xl md:leading-8 ${props.descriptionVariant}`}
          >
            {props.description}
          </p>
        </div>
        <div
          className={`box-border caret-transparent min-h-0 min-w-0 outline-[3px] no-underline md:block md:min-h-[auto] md:min-w-[auto] ${props.dividerVariant}`}
        ></div>
        <div
          className={`box-border caret-transparent outline-[3px] no-underline pt-0 md:h-[360px] md:pt-[35px] ${props.iconWrapperVariant}`}
        >
          <div
            className={`box-border caret-transparent outline-[3px] no-underline ${props.iconInnerVariant}`}
          >
            <img
              src={props.iconSrc}
              alt="Icon"
              className="box-content caret-black h-auto outline-0 w-auto md:aspect-auto md:box-border md:caret-transparent md:h-[279px] md:outline-[3px] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:no-underline md:decoration-auto md:underline-offset-auto md:w-[738px] md:[mask-position:0%] md:scroll-m-0 md:scroll-p-[auto]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
