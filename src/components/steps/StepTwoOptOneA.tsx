import { useAtom } from "jotai";
import { StepTwoOptOneAaAtom } from "../../store";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { StepTwoOptOneAOptions } from "../../utils/options";

const StepTwoOptOneA = () => {
  const [StepTwoOptOneAoption, setStepTwoOptOneAOptions] =
    useAtom(StepTwoOptOneAaAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>מתי עלית לארץ?</h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center max-w-full">
        {StepTwoOptOneAOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-2 rounded-lg bg-white cursor-pointer w-40 md:w-48 max-w-full text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": StepTwoOptOneAoption === option,
              }
            )}
            onClick={() => {
              setStepTwoOptOneAOptions(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwoOptOneA;
