import cn from "../../utils/cn";
import { headingStyles, stepContainerStyles } from "../../utils/styles";

const StepLast = () => {
  return (
    <div className={cn(stepContainerStyles, "mb-12")}>
      <h3 className={cn(headingStyles)}>
        {/* תודה רבה על שיתוף הפעולה!
                <br />
                עשית עוד צעד בדרך לאחד הדרכונים החזקים בעולם.
                <br />
                על מנת שנוכל להשלים את כל הפרטים הרלוונטים נדאג לחזור אליך בהקדם. */}
        אנו מודים לך, נציג מקצועי מטעמנו יבדוק את זכאותך לדרכון פולני ויחזור
        אלייך בשיחת טלפון בקרוב.
      </h3>
    </div>
  );
};

export default StepLast;
