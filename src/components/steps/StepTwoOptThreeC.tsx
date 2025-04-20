import { useAtom } from "jotai";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { StepTwoOptThreeCOptions } from "../../utils/options";
import { StepTwoOptThreeCAtom } from "../../store";

const StepTwoOptThreeC = () => {
  const [StepTwoOptThreeCoption, setStepTwoOptThreeCOptions] =
    useAtom(StepTwoOptThreeCAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        האם אבא / סבא / סבא רבא נולד בפולין?
      </h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center max-w-full">
        {StepTwoOptThreeCOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-2 rounded-lg bg-white cursor-pointer w-40 md:w-48 max-w-full text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": StepTwoOptThreeCoption === option,
              }
            )}
            onClick={() => {
              setStepTwoOptThreeCOptions(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwoOptThreeC;
