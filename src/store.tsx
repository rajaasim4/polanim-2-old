import { atom } from "jotai";
import moment from "moment";
import {
  DocumentOfFamilyMemberOptions,
  RootsInGermanyAustriaOptions,
  StepTwoOptOneAOptions,
  StepTwoOptThreeAOptions,
  StepTwoOptThreeBOptions,
  StepTwoOptThreeCOptions,
  StepTwoOptThreeDOptions,
  StepTwoOptThreeEOptions,
  StepTwoOptThreeFOptions,
  StepTwoOptTwoAOptions,
  StepTwoOptTwoBOptions,
  StepTwoOptTwoCOptions,
  StepTwoOptTwoDOptions,
  StepTwoOptTwoEOptions,
  StepTwoOptTwoFOptions,
} from "./utils/options";
import { atomWithStorage } from "jotai/utils";

export const loadingAtom = atom(false);

export const currentStepAtom = atomWithStorage("currentStep", 1);

export const modalDisplayAtom = atom<"TermsOfUse" | "accessibility" | "none">(
  "none"
);

export const fullNameAtom = atomWithStorage("fullName", "");

export const documentOfFamilyMemberOptionsAtom = atomWithStorage<
  DocumentOfFamilyMemberOptions | ""
>("familyMemberDocument", "");

export const rootsInGermanyAustriaAtom = atomWithStorage<
  RootsInGermanyAustriaOptions | ""
>("roots", "");

//Steps
export const StepTwoOptOneAaAtom = atomWithStorage<StepTwoOptOneAOptions | "">(
  "StepTwoOptOneA",
  ""
);
export const StepTwoOptTwoAAtom = atomWithStorage<StepTwoOptTwoAOptions | "">(
  "StepTwoOptTwoA",
  ""
);
export const StepTwoOptTwoBAtom = atomWithStorage<StepTwoOptTwoBOptions | "">(
  "StepTwoOptTwoB",
  ""
);
export const StepTwoOptTwoCAtom = atomWithStorage<StepTwoOptTwoCOptions | "">(
  "StepTwoOptTwoC",
  ""
);
export const StepTwoOptTwoDAtom = atomWithStorage<StepTwoOptTwoDOptions | "">(
  "StepTwoOptTwoD",
  ""
);
export const StepTwoOptTwoEAtom = atomWithStorage<StepTwoOptTwoEOptions | "">(
  "StepTwoOptTwoE",
  ""
);
export const StepTwoOptTwoFAtom = atomWithStorage<StepTwoOptTwoFOptions | "">(
  "StepTwoOptTwoF",
  ""
);
//Step Two Option 3
export const StepTwoOptThreeAAtom = atomWithStorage<
  StepTwoOptThreeAOptions | ""
>("StepTwoOptThreeA", "");

export const StepTwoOptThreeBAtom = atomWithStorage<
  StepTwoOptThreeBOptions | ""
>("StepTwoOptThreeB", "");

export const StepTwoOptThreeCAtom = atomWithStorage<
  StepTwoOptThreeCOptions | ""
>("StepTwoOptThreeC", "");

export const StepTwoOptThreeDAtom = atomWithStorage<
  StepTwoOptThreeDOptions | ""
>("StepTwoOptThreeD", "");

export const StepTwoOptThreeEAtom = atomWithStorage<
  StepTwoOptThreeEOptions | ""
>("StepTwoOptThreeE", "");

export const StepTwoOptThreeFAtom = atomWithStorage<
  StepTwoOptThreeFOptions | ""
>("StepTwoOptThreeF", "");

export const phoneNumberAtom = atomWithStorage("phoneNumber", "");

export const createdAtAtom = atom(
  moment(new Date()).format("Do MMM YYYY, h:mm a")
);
export const stepHistoryAtom = atom<number[]>([1]);
// export const stepHistoryAtom = atomWithStorage("currentStep", <number[]>([1]);

export const formIdAtom = atom("");

export const continueBtnLoadingAtom = atom(false);

export const errorMsgAtom = atom("");

export const isPrivayReadAtom = atom(true);
