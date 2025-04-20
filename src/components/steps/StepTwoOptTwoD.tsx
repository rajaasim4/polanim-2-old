import { useAtom } from "jotai";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { StepTwoOptTwoDOptions } from "../../utils/options";
import { StepTwoOptTwoDAtom } from "../../store";

const StepTwoOptTwoD = () => {
  const [StepTwoOptTwoDoption, setStepTwoOptTwoDOptions] =
    useAtom(StepTwoOptTwoDAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        מתי אמא / סבתא /סבתא רבא עלתה לארץ?
      </h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center max-w-full">
        {StepTwoOptTwoDOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-2 rounded-lg bg-white cursor-pointer w-40 md:w-48 max-w-full text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": StepTwoOptTwoDoption === option,
              }
            )}
            onClick={() => {
              setStepTwoOptTwoDOptions(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwoOptTwoD;
