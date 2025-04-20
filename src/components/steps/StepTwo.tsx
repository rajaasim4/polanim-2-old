import { useAtom } from "jotai";
import { rootsInGermanyAustriaAtom, fullNameAtom } from "../../store";
import cn from "../../utils/cn";
import {
  headingStyles,
  stepContainerStyles,
  subHeadingStyles,
} from "../../utils/styles";
import { rootsInGermanyAustriaOptions } from "../../utils/options";

const StepTwo = () => {
  const [rootsInGermanyAustria, setRootsInGermanyAustria] = useAtom(
    rootsInGermanyAustriaAtom
  );
  const [fullName] = useAtom(fullNameAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      {/* <h3 className={cn(headingStyles, "mb-4")}>שלום {fullName},</h3>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        אנא בחר - מי האחרון שנולד בפולין:
      </h4> */}
      <h3 className={cn(headingStyles, "mb-4")}>שלום {fullName},</h3>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        אנא בחר - מי נולד בפולין:
      </h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center max-w-full">
        {rootsInGermanyAustriaOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-2 rounded-lg bg-white cursor-pointer w-40 md:w-48 max-w-full text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": rootsInGermanyAustria === option,
              }
            )}
            onClick={() => {
              setRootsInGermanyAustria(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwo;
