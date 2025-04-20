import cn from "../../utils/cn";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";

const StepTwoOptThreeENegative = () => {
  return (
    <div className={cn(stepContainerStyles, "mb-4")}>
      <h4 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
        על סמך הפרטים שהזנת נראה כי לא קיימת התאמה. אם חלה טעות בבחירה ניתן
        לחזור.
      </h4>
    </div>
  );
};

export default StepTwoOptThreeENegative;
