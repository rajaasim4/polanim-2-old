import { useAtom } from "jotai";
import { useEffect } from "react";
import { v4 } from "uuid";
import FormButtons from "./components/FormButtons";
import Header from "./components/Header";
import Loader from "./components/Loader/Loader";
import Stepper from "./components/Stepper";
import TermsOfUseModal from "./components/TermsOfUseModal";
import StepTwo from "./components/steps/StepTwo";
import StepLast from "./components/steps/StepLast";
import StepOne from "./components/steps/StepOne";
import StepFour from "./components/steps/StepFour";
import {
  modalDisplayAtom,
  currentStepAtom,
  formIdAtom,
  loadingAtom,
} from "./store";
import MobileFooter from "./components/MobileFooter";
import StepTwoNegative from "./components/steps/StepTwoNegative";
// import cn from "./utils/cn";
import StepTwoOptOneA from "./components/steps/StepTwoOptOneA";
import StepTwoOptTwoA from "./components/steps/StepTwoOptTwoA";
import StepTwoOptTwoB from "./components/steps/StepTwoOptTwoB";
import StepTwoOptTwoC from "./components/steps/StepTwoOptTwoC";
import StepTwoOptTwoCNegative from "./components/steps/StepTwoOptTwoCNegative";
// import StepTwoOptTwoDNegative from "./components/steps/StepTwoOptTwoENegative";
import StepTwoOptTwoD from "./components/steps/StepTwoOptTwoD";
import StepTwoOptThreeA from "./components/steps/StepTwoOptThreeA";
import StepTwoOptThreeB from "./components/steps/StepTwoOptThreeB";
// import StepTwoOptThreeBNegative from "./components/steps/StepTwoOptThreeCNegative";
import StepTwoOptThreeC from "./components/steps/StepTwoOptThreeC";
import StepTwoOptThreeD from "./components/steps/StepTwoOptThreeD";
// import StepTwoOptThreeDNegative from "./components/steps/StepTwoOptThreeENegative";
import StepTwoOptTwoENegative from "./components/steps/StepTwoOptTwoENegative";
import StepTwoOptTwoE from "./components/steps/StepTwoOptTwoE";
import StepTwoOptThreeE from "./components/steps/StepTwoOptThreeE";
import StepTwoOptThreeCNegative from "./components/steps/StepTwoOptThreeCNegative";
import StepTwoOptThreeENegative from "./components/steps/StepTwoOptThreeENegative";
import StepTwoOptTwoF from "./components/steps/StepTwoOptTwoF";
import StepTwoOptThreeF from "./components/steps/StepTwoOptThreeF";
import StepTwoOptThreeFNegative from "./components/steps/StepTwoOptThreeFNegative";

const App = () => {
  const [, setIsModalOpen] = useAtom(modalDisplayAtom);
  const [currentStep] = useAtom(currentStepAtom);
  const [isLoading] = useAtom(loadingAtom);
  const [, setFormId] = useAtom(formIdAtom);

  useEffect(() => {
    const id = localStorage.getItem("formId");
    if (id) {
      setFormId(id);
    } else {
      const newId = v4();
      localStorage.setItem("formId", newId);
      setFormId(newId);
    }
  }, []);
  return (
    <div
      dir="rtl"
      className="font-['Assistant'] bg-[url('/background.jpg')] bg-no-repeat bg-cover min-w-full min-h-screen flex items-center justify-center overflow-hidden pt-6 pb-16 md:pt-12 md:pb-6 relative"
    >
      <TermsOfUseModal />
      <div className="bg-transparent p-8 md:px-20 md:py-16 border-8 border-white rounded-2xl w-11/12 md:w-10/12 max-w-screen-2xl relative">
        <div className="bg-white/85 p-4 pt-6 rounded-2xl  min-h-[700px] flex flex-col">
          {!isLoading && currentStep !== 17 && <Stepper />}
          <Header />
          {isLoading && <Loader />}
          {currentStep === 1 && !isLoading && <StepOne />}
          {currentStep === 2 && !isLoading && <StepTwo />}
          {currentStep === -2 && !isLoading && <StepTwoNegative />}
          {currentStep === 3 && !isLoading && <StepTwoOptOneA />}
          {/* Step Two B Options */}
          {currentStep === 4 && !isLoading && <StepTwoOptTwoF />}
          {currentStep === 5 && !isLoading && <StepTwoOptTwoA />}
          {currentStep === 6 && !isLoading && <StepTwoOptTwoB />}
          {currentStep === 7 && !isLoading && <StepTwoOptTwoC />}
          {currentStep === -7 && !isLoading && <StepTwoOptTwoCNegative />}
          {currentStep === 8 && !isLoading && <StepTwoOptTwoD />}
          {currentStep === 9 && !isLoading && <StepTwoOptTwoE />}
          {currentStep === -9 && !isLoading && <StepTwoOptTwoENegative />}
          {/* Step Two C Option  */}
          {currentStep === 10 && !isLoading && <StepTwoOptThreeA />}
          {currentStep === 11 && !isLoading && <StepTwoOptThreeB />}
          {currentStep === 12 && !isLoading && <StepTwoOptThreeC />}
          {currentStep === -12 && !isLoading && <StepTwoOptThreeCNegative />}
          {currentStep === 13 && !isLoading && <StepTwoOptThreeF />}
          {currentStep === -13 && !isLoading && <StepTwoOptThreeFNegative />}
          {currentStep === 14 && !isLoading && <StepTwoOptThreeD />}
          {currentStep === 15 && !isLoading && <StepTwoOptThreeE />}
          {currentStep === -15 && !isLoading && <StepTwoOptThreeENegative />}
          {currentStep === 16 && !isLoading && <StepFour />}
          {currentStep === 17 && !isLoading && <StepLast />}

          <FormButtons />
          <MobileFooter />
        </div>
        <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2 -bottom-16 md:bottom-1 w-full">
          <span
            onClick={() => {
              setIsModalOpen("TermsOfUse");
            }}
            className="text-xl font-bold text-white underline cursor-pointer"
          >
            מדיניות פרטיות ותנאי שימוש
          </span>
          <span
            onClick={() => {
              setIsModalOpen("accessibility");
            }}
            className="text-xl font-bold text-white underline cursor-pointer"
          >
            הצהרת נגישות
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
