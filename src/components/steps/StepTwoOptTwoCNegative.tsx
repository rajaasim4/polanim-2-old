import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";

const StepTwoOptTwoCNegative = () => {
  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        נראה כי לא קיימת זכאות אם חלה טעות בבחירה ניתן לחזור.
      </h4>
    </div>
  );
};

export default StepTwoOptTwoCNegative;
