import { useAtom } from "jotai";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { StepTwoOptTwoEOptions } from "../../utils/options";
import { StepTwoOptTwoEAtom } from "../../store";

const StepTwoOptTwoE = () => {
  const [StepTwoOptTwoEoption, setStepTwoOptTwoEOptions] =
    useAtom(StepTwoOptTwoEAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        האם אמא / סבתא /סבתא רבא הייתה קטינה בעת העלייה לארץ?
      </h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center max-w-full">
        {StepTwoOptTwoEOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-2 rounded-lg bg-white cursor-pointer w-40 md:w-48 max-w-full text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": StepTwoOptTwoEoption === option,
              }
            )}
            onClick={() => {
              setStepTwoOptTwoEOptions(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwoOptTwoE;
