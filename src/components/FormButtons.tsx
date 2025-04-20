import { useAtom } from "jotai";
import TagManager from "react-gtm-module";
import { v4 } from "uuid";
import {
  continueBtnLoadingAtom,
  createdAtAtom,
  currentStepAtom,
  documentOfFamilyMemberOptionsAtom,
  errorMsgAtom,
  fullNameAtom,
  isPrivayReadAtom,
  loadingAtom,
  phoneNumberAtom,
  rootsInGermanyAustriaAtom,
  stepHistoryAtom,
  StepTwoOptOneAaAtom,
  StepTwoOptThreeAAtom,
  StepTwoOptThreeBAtom,
  StepTwoOptThreeCAtom,
  StepTwoOptThreeDAtom,
  StepTwoOptThreeEAtom,
  StepTwoOptThreeFAtom,
  StepTwoOptTwoAAtom,
  StepTwoOptTwoBAtom,
  StepTwoOptTwoCAtom,
  StepTwoOptTwoDAtom,
  StepTwoOptTwoEAtom,
  StepTwoOptTwoFAtom,
} from "../store";
import { WEBHOOK_URL } from "../utils/CONSTS";
import cn from "../utils/cn";
import TermsAndPrivacyAgreement from "./TermsAndPrivacyAgreement";
import { useEffect } from "react";

const FormButtons = () => {
  const [currentStep, setCurrentStep] = useAtom(currentStepAtom);
  const [fullName] = useAtom(fullNameAtom);
  const [isLoading, setIsLoading] = useAtom(loadingAtom);
  const [phoneNumber] = useAtom(phoneNumberAtom);
  const [documentOfFamilyMember] = useAtom(documentOfFamilyMemberOptionsAtom);
  const [rootsInGermanyAustria] = useAtom(rootsInGermanyAustriaAtom);
  const [createdAt] = useAtom(createdAtAtom);
  const [btnLoading, setBtnLoading] = useAtom(continueBtnLoadingAtom);
  const [errorMsg, setErrorMsg] = useAtom(errorMsgAtom);
  const [isPrivacyRead] = useAtom(isPrivayReadAtom);
  const [StepTwoOptOneA] = useAtom(StepTwoOptOneAaAtom);
  const [StepTwoOptTwoA] = useAtom(StepTwoOptTwoAAtom);
  const [StepTwoOptTwoB] = useAtom(StepTwoOptTwoBAtom);
  const [StepTwoOptTwoC] = useAtom(StepTwoOptTwoCAtom);
  const [StepTwoOptTwoD] = useAtom(StepTwoOptTwoDAtom);
  const [StepTwoOptTwoE] = useAtom(StepTwoOptTwoEAtom);
  const [StepTwoOptTwoF] = useAtom(StepTwoOptTwoFAtom);
  const [StepTwoOptThreeA] = useAtom(StepTwoOptThreeAAtom);
  const [StepTwoOptThreeB] = useAtom(StepTwoOptThreeBAtom);
  const [StepTwoOptThreeC] = useAtom(StepTwoOptThreeCAtom);
  const [StepTwoOptThreeD] = useAtom(StepTwoOptThreeDAtom);
  const [StepTwoOptThreeE] = useAtom(StepTwoOptThreeEAtom);
  const [StepTwoOptThreeF] = useAtom(StepTwoOptThreeFAtom);
  const [stepHistory, setStepHistory] = useAtom(stepHistoryAtom);

  const commonButtonStyles =
    "font-extrabold text-2xl md:text-3xl w-32 md:min-w-48 md:py-3 py-2 rounded-2xl disabled:cursor-not-allowed disabled:opacity-70";
  const regex = /^05\d{8}$/;

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      console.log(event);
      if (event.key === "Enter") {
        !isContinueBtnDisable() && handleContineBtnClick();
      }
    };

    document.body.addEventListener("keydown", handleKeyPress);

    return () => {
      document.body.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    currentStep,
    errorMsg,
    fullName,
    StepTwoOptThreeD,
    rootsInGermanyAustria,
    StepTwoOptThreeC,
    StepTwoOptThreeB,
    documentOfFamilyMember,
    phoneNumber,
    isPrivacyRead,
    StepTwoOptOneA,
    StepTwoOptTwoA,
    StepTwoOptTwoB,
    StepTwoOptTwoD,
    StepTwoOptThreeA,
  ]);

  const handleContineBtnClick = async () => {
    setErrorMsg("");
    try {
      let nextStep = currentStep;

      if (currentStep === 1) {
        // Validate full name
        if (fullName.length < 2) {
          setErrorMsg("לפחות 2 תווים");
          return;
        }
        nextStep = 2;
      } else if (currentStep === 2) {
        if (rootsInGermanyAustria === "אני נולדתי בפולין ") {
          nextStep = 3;
        } else if (rootsInGermanyAustria === "אבא / סבא / סבא רבא") {
          nextStep = 4;
        } else {
          nextStep = 10;
        }
        // Step Two Option 1
      } else if (currentStep === 3) {
        nextStep = 16;
        // Step TowoOption 2
      } else if (currentStep === 4) {
        nextStep = StepTwoOptTwoF === "לא" ? 7 : 5;
      } else if (currentStep === 5) {
        nextStep = StepTwoOptTwoA === "אחרי 1951" ? 16 : 6;
      } else if (currentStep === 6) {
        nextStep = StepTwoOptTwoB === "לא" ? 16 : 7;
      } else if (currentStep === 7) {
        nextStep = StepTwoOptTwoC === "לא" ? -7 : 8;
      } else if (currentStep === 8) {
        nextStep = StepTwoOptTwoD === "אחרי 1951" ? 16 : 9;
      } else if (currentStep === 9) {
        nextStep = StepTwoOptTwoE === "לא" ? -9 : 16;
      }
      // Step Two option 3
      else if (currentStep === 10) {
        nextStep = StepTwoOptThreeA === "אחרי 19.01.1951" ? 16 : 11;
      } else if (currentStep === 11) {
        nextStep = StepTwoOptThreeB === "כן" ? 16 : 12;
      } else if (currentStep === 12) {
        nextStep = StepTwoOptThreeC === "לא" ? -12 : 13;
      } else if (currentStep === 13) {
        nextStep = StepTwoOptThreeF === "לא" ? -13 : 14;
      } else if (currentStep === 14) {
        nextStep = StepTwoOptThreeD === "אחרי 1951" ? 16 : 15;
      } else if (currentStep === 15) {
        nextStep = StepTwoOptThreeE === "לא" ? 16 : -15;
      } else if (currentStep === 16) {
        if (!isPrivacyRead) {
          setErrorMsg("לתוצאות הבדיקה אנא עיין בתנאי השימוש");
          return;
        }
        if (!regex.test(phoneNumber)) {
          setErrorMsg("יש להזין מספר טלפון תקין");
          return;
        }

        const payload = {
          fullName,
          rootsInGermanyAustria,
          documentOfFamilyMember,
          phoneNumber,
          createdAt,
          StepTwoOptOneA,
          StepTwoOptThreeA,
          StepTwoOptThreeB,
          StepTwoOptThreeC,
          StepTwoOptThreeD,
          StepTwoOptThreeE,
          StepTwoOptThreeF,
          StepTwoOptTwoA,
          StepTwoOptTwoB,
          StepTwoOptTwoC,
          StepTwoOptTwoD,
          StepTwoOptTwoE,
          StepTwoOptTwoF,
          pageUrl: window.location.href,
        };
        await fetch(WEBHOOK_URL, {
          method: "POST",
          body: JSON.stringify(payload),
        });
        TagManager.dataLayer({
          dataLayer: {
            event: `registration_complete_polanim`,
          },
        });
        localStorage.setItem("formId", v4());
        setIsLoading(true);
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
        nextStep = currentStep + 1;
      }

      // Update step history and current step
      setStepHistory((prev) => {
        if (nextStep > prev[prev.length - 1]) {
          return [...prev, nextStep]; // Add nextStep to history if moving forward
        }
        return prev;
      });

      setCurrentStep(nextStep); // Set the current step
    } catch (error) {
      console.log("Error: ", error);
    }
    setBtnLoading(false);
  };

  const handleReturnBtnClick = () => {
    if (currentStep < 0) {
      switch (currentStep) {
        case -7:
          setCurrentStep(7);
          break;
        case -9:
          setCurrentStep(9);
          break;
        case -11:
          setCurrentStep(11);
          break;
        case -12:
          setCurrentStep(12);
          break;
        case -13:
          setCurrentStep(13);
          break;
        case -15:
          setCurrentStep(15);
          break;
        default:
          setCurrentStep(Math.abs(currentStep));
      }
    } else {
      const previousStep = stepHistory[stepHistory.length - 2];
      if (previousStep) {
        setStepHistory((prev) => prev.slice(0, -1));
        setCurrentStep(previousStep);
      }
    }
  };
  const isContinueBtnDisable = () => {
    if (btnLoading) return true;
    else if (currentStep === 2 && !rootsInGermanyAustria) return true;
    else if (currentStep === 3 && !StepTwoOptOneA) return true;
    else if (currentStep === 4 && !StepTwoOptTwoF) return true;
    else if (currentStep === 5 && !StepTwoOptTwoA) return true;
    else if (currentStep === 6 && !StepTwoOptTwoB) return true;
    else if (currentStep === 7 && !StepTwoOptTwoC) return true;
    else if (currentStep === 8 && !StepTwoOptTwoD) return true;
    else if (currentStep === 9 && !StepTwoOptTwoE) return true;
    else if (currentStep === 10 && !StepTwoOptThreeA) return true;
    else if (currentStep === 11 && !StepTwoOptThreeB) return true;
    else if (currentStep === 12 && !StepTwoOptThreeC) return true;
    else if (currentStep === 13 && !StepTwoOptThreeF) return true;
    else if (currentStep === 14 && !StepTwoOptThreeD) return true;
    else if (currentStep === 15 && !StepTwoOptThreeE) return true;
    else if (currentStep === 16 && !isPrivacyRead) return true;

    return false;
  };

  return (
    <>
      {!isLoading && currentStep !== 17 && (
        <div
          className={cn(
            "flex gap-4 xl:gap-12 2xl:gap-20 items-center flex-col-reverse md:flex-row justify-center md:justify-between md:mt-auto select-none",
            {
              "md:justify-center": [1, -2].includes(currentStep),
              "md:-mt-4": currentStep === -2,
            }
          )}
        >
          {currentStep !== 1 && (
            <button
              disabled={currentStep === 1 || btnLoading}
              onClick={handleReturnBtnClick}
              className={`${commonButtonStyles} bg-themeBackBtnGrey`}
            >
              חזור
            </button>
          )}
          {currentStep === 16 && (
            <div className="hidden xl:block">
              <TermsAndPrivacyAgreement />
            </div>
          )}
          {![-2, -4, -11, -7, -6, -7, -9 - 8, -11, -13, -15, -12].includes(
            currentStep
          ) && (
            <button
              onClick={handleContineBtnClick}
              disabled={isContinueBtnDisable()}
              className={cn(`${commonButtonStyles} bg-themeBlue text-white`, {
                "opacity-70":
                  btnLoading ||
                  (currentStep === 16 &&
                    (!isPrivacyRead || !regex.test(phoneNumber))) ||
                  (currentStep === 1 && fullName.length < 2),
              })}
            >
              {currentStep === 16 ? "שלח" : "המשך"}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default FormButtons;
