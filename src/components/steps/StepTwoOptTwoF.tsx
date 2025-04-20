import { useAtom } from "jotai";
import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";
import { StepTwoOptTwoFOptions } from "../../utils/options";
import { StepTwoOptTwoFAtom } from "../../store";

const StepTwoOptTwoF = () => {
  const [StepTwoOptTwoFoption, setStepTwoOptTwoFOptions] =
    useAtom(StepTwoOptTwoFAtom);

  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        האם השטחים שמהם הגיע אבא / סבא / סבא רבא הם בשליטת פולין כיום?
      </h4>
      <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center max-w-full">
        {StepTwoOptTwoFOptions.map((option, index) => (
          <span
            key={index}
            className={cn(
              "py-4 px-2 rounded-lg bg-white cursor-pointer w-40 md:w-48 max-w-full text-center text-lg md:text-3xl select-none",
              {
                "bg-themeBlue text-white": StepTwoOptTwoFoption === option,
              }
            )}
            onClick={() => {
              setStepTwoOptTwoFOptions(option);
            }}
          >
            {option}
          </span>
        ))}
      </div>
    </div>
  );
};

export default StepTwoOptTwoF;
