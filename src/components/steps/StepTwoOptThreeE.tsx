import { useAtom } from "jotai";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { StepTwoOptThreeEOptions } from "../../utils/options";
import { StepTwoOptThreeEAtom } from "../../store";

const StepTwoOptThreeE = () => {
  const [StepTwoOptThreeEoption, setStepTwoOptThreeEOptions] =
    useAtom(StepTwoOptThreeEAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        האם שירת בצה״ל בין התאריכים 15.5.1948 - 19.1.1951 או היה בתפקיד ציבורי?
      </h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center max-w-full">
        {StepTwoOptThreeEOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-2 rounded-lg bg-white cursor-pointer w-40 md:w-48 max-w-full text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": StepTwoOptThreeEoption === option,
              }
            )}
            onClick={() => {
              setStepTwoOptThreeEOptions(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwoOptThreeE;
