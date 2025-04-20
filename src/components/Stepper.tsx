// import { useAtom } from "jotai";
// import { currentStepAtom } from "../store";
// import cn from "../utils/cn";

// const PROGRESS_LINE_WIDTH = ["0%", "50%", "100%"];
// // const PROGRESS_LINE_WIDTH = ["0%", "25%", "50%", "75%", "100%"];

// const Stepper = () => {
//   const [currentStep] = useAtom(currentStepAtom);

//   return (
//     // <div className="w-full absolute top-5 sm:top-4 md:-top-11 left-1/2 -translate-x-1/2 max-w-56 xsm:max-w-80 sm:max-w-md md:max-w-3xl">
//     <div className="w-full absolute -top-6 md:-top-11 left-1/2 -translate-x-1/2  max-w-[calc(100%-4.5rem)] md:max-w-3xl">
//       <div className="relative flex items-center justify-between w-full">
//         <div className="absolute right-0 top-2/4 h-2 w-full -translate-y-2/4 bg-themeStepperGrey"></div>
//         <div
//           className="absolute right-0 top-2/4 h-2 w-1/2 -translate-y-2/4 bg-themeBlue transition-all duration-500"
//           style={{
//             width: PROGRESS_LINE_WIDTH[Math.abs(currentStep) - 1],
//           }}
//         ></div>
//         {/* {[1, 2, 3].map((step) => (
//           <div
//             key={step}
//             className={cn(
//               "relative z-10 grid  w-10 h-10 md:w-20 md:h-20 font-bold text-white transition-all duration-300  rounded-full place-items-center bg-themeStepperGrey",
//               {
//                 "bg-themeBlue":
//                   currentStep <= step || currentStep === 12 ? "" : "",
//                 // "bg-themeBlue": step <= Math.abs(currentStep),
//               }
//             )}
//           >
//             {step}
//           </div>
//         ))} */}
//         {[1, 2, 3].map((step) => (
//           <div
//             key={step}
//             className={cn(
//               "relative z-10 grid w-10 h-10 md:w-20 md:h-20 font-bold text-white transition-all duration-300 rounded-full place-items-center bg-themeStepperGrey",
//               {
//                 "bg-themeBlue":
//                   (step <= 2 &&
//                     (currentStep <= 1 ||
//                       currentStep < 0 ||
//                       currentStep === 12)) ||
//                   (step === 3 && currentStep === 12),
//               }
//             )}
//           >
//             {step}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Stepper;

import { useAtom } from "jotai";
import { currentStepAtom } from "../store";
import cn from "../utils/cn";

const PROGRESS_LINE_WIDTH = ["0%", "50%", "100%"];

const Stepper = () => {
  const [currentStep] = useAtom(currentStepAtom);

  const shouldHighlightStep = (step: number) => {
    const absCurrentStep = Math.abs(currentStep);

    // For step 3, only highlight when currentStep is 12
    if (step === 3) {
      return currentStep === 16;
    }
    if (currentStep < 0) {
      return step <= absCurrentStep;
    }

    if (currentStep === 1) {
      return step === 1;
    }

    if (currentStep === 2) {
      return true;
    }

    if (currentStep >= 3) {
      return step <= 2;
    }

    return false;
  };

  const getProgressWidth = () => {
    const absStep = Math.abs(currentStep);

    if (currentStep === 16) {
      return PROGRESS_LINE_WIDTH[2];
    }

    if (currentStep === 1) {
      return PROGRESS_LINE_WIDTH[0];
    }

    if (currentStep === 2) {
      return PROGRESS_LINE_WIDTH[1];
    }

    if (currentStep >= 3) {
      return PROGRESS_LINE_WIDTH[1];
    }

    if (currentStep < 0) {
      if (absStep >= 3) return PROGRESS_LINE_WIDTH[1];
      return PROGRESS_LINE_WIDTH[absStep - 1];
    }

    return "0%";
  };
  return (
    <div className="w-full absolute -top-6 md:-top-11 left-1/2 -translate-x-1/2 max-w-[calc(100%-4.5rem)] md:max-w-3xl">
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute right-0 top-2/4 h-2 w-full -translate-y-2/4 bg-themeStepperGrey"></div>
        <div
          className="absolute right-0 top-2/4 h-2 w-1/2 -translate-y-2/4 bg-themeBlue transition-all duration-500"
          //   style={{ width: PROGRESS_LINE_WIDTH[Math.abs(currentStep) - 1] }}
          style={{ width: getProgressWidth() }}
        ></div>
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className={cn(
              "relative z-10 grid w-10 h-10 md:w-20 md:h-20 font-bold text-white transition-all duration-300 rounded-full place-items-center bg-themeStepperGrey",
              {
                "bg-themeBlue": shouldHighlightStep(step),
              }
            )}
          >
            {step}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stepper;
