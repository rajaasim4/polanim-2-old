import { useAtom } from "jotai";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { StepTwoOptTwoAOptions } from "../../utils/options";
import { StepTwoOptTwoAAtom } from "../../store";

const StepTwoOptTwoA = () => {
  const [StepTwoOptTwoAoption, setStepTwoOptTwoAOptions] =
    useAtom(StepTwoOptTwoAAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        מתי אבא / סבא / סבא רבא עלה לארץ?
      </h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center max-w-full">
        {StepTwoOptTwoAOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-2 rounded-lg bg-white cursor-pointer w-40 md:w-48 max-w-full text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": StepTwoOptTwoAoption === option,
              }
            )}
            onClick={() => {
              setStepTwoOptTwoAOptions(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwoOptTwoA;
