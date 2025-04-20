import { useAtom } from "jotai";
import { useRef } from "react";
import { errorMsgAtom, fullNameAtom, phoneNumberAtom } from "../../store";
import cn from "../../utils/cn";
import {
  errorStyles,
  headingStyles,
  inputFieldContainerStyles,
  inputFieldStyles,
  stepContainerStyles,
  subHeadingStyles,
} from "../../utils/styles";
import TermsAndPrivacyAgreement from "../TermsAndPrivacyAgreement";

const StepFour = () => {
  const [phoneNumber, setPhoneNumber] = useAtom(phoneNumberAtom);
  const [errorMsg] = useAtom(errorMsgAtom);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [fullname] = useAtom(fullNameAtom);
  return (
    <div className={stepContainerStyles}>
      {/* <h1 className={cn(headingStyles, "md:leading-[55px]")}>
              בכדי שנוכל לבדוק את הסיכוי שלך לקבלת דרכון גרמני יש למלא מספר טלפון נייד תקין:
            </h1>
            <h3 className={subHeadingStyles}>מה מספר הטלפון הנייד שלך?</h3> */}
      <h1 className={cn(headingStyles, "md:leading-[55px]")}>
        תודה {fullname} על שיתוף הפעולה. על מנת לקבל תשובה סופית בנוגע לזכאותך
        לדרכון פולני ולאזרחות אירופאית יש למלא טלפון נייד תקין:
      </h1>
      <h3 className={subHeadingStyles}>מה מספר הטלפון שלך?</h3>
      <div
        className={inputFieldContainerStyles}
        onClick={() => inputRef.current?.focus()}
      >
        <img src="icons/phone-icon.svg" />
        <input
          ref={inputRef}
          type="number"
          placeholder="טלפון:"
          className={inputFieldStyles}
          onChange={(e) => setPhoneNumber(e.target.value)}
          value={phoneNumber}
        />
      </div>
      <div className="mb-2">
        <p className={cn(errorStyles, "mb-0 text-center")}>
          {errorMsg ? errorMsg : " "}
        </p>
        <div className="xl:hidden">
          <TermsAndPrivacyAgreement />
        </div>
      </div>
    </div>
  );
};

export default StepFour;
