export const rootsInGermanyAustriaOptions = [
  // "אני יליד/ת פולין ",
  // "אבא/סבא/סבא רבא",
  // "אמא / סבתא סתבא רבא",
  "אני נולדתי בפולין ",
  "אבא / סבא / סבא רבא",
  " אמא / סבתא / סבתא רבא",
] as const;
export type RootsInGermanyAustriaOptions =
  (typeof rootsInGermanyAustriaOptions)[number];

export const documentOfFamilyMemberOptions = [
  "כן",
  "לא",
  "לא ידוע לי",
] as const;
export type DocumentOfFamilyMemberOptions =
  (typeof documentOfFamilyMemberOptions)[number];

// Step Two Option 1
export const StepTwoOptOneAOptions = ["לפני 1951", "אחרי 1951"] as const;
export type StepTwoOptOneAOptions = (typeof StepTwoOptOneAOptions)[number];

// Step Two Option 2

export const StepTwoOptTwoAOptions = ["לפני 1951", "אחרי 1951"] as const;
export type StepTwoOptTwoAOptions = (typeof StepTwoOptTwoAOptions)[number];

export const StepTwoOptTwoBOptions = ["כן", "לא"] as const;
export type StepTwoOptTwoBOptions = (typeof StepTwoOptTwoBOptions)[number];

export const StepTwoOptTwoCOptions = ["כן", "לא"] as const;
export type StepTwoOptTwoCOptions = (typeof StepTwoOptTwoCOptions)[number];

export const StepTwoOptTwoDOptions = ["אחרי 1951", "לפני 1951"] as const;
export type StepTwoOptTwoDOptions = (typeof StepTwoOptTwoDOptions)[number];

export const StepTwoOptTwoEOptions = ["כן", "לא"] as const;
export type StepTwoOptTwoEOptions = (typeof StepTwoOptTwoEOptions)[number];

export const StepTwoOptTwoFOptions = ["כן", "לא"] as const;
export type StepTwoOptTwoFOptions = (typeof StepTwoOptTwoFOptions)[number];

// Step Two Option 3
export const StepTwoOptThreeAOptions = [
  "אחרי 19.01.1951",
  "לפני 19.01.1951 ",
] as const;
export type StepTwoOptThreeAOptions = (typeof StepTwoOptThreeAOptions)[number];

export const StepTwoOptThreeBOptions = ["כן", "לא"] as const;
export type StepTwoOptThreeBOptions = (typeof StepTwoOptThreeBOptions)[number];

export const StepTwoOptThreeCOptions = ["כן", "לא"] as const;
export type StepTwoOptThreeCOptions = (typeof StepTwoOptThreeCOptions)[number];

export const StepTwoOptThreeDOptions = ["לפני 1951", "אחרי 1951"] as const;
export type StepTwoOptThreeDOptions = (typeof StepTwoOptThreeDOptions)[number];

export const StepTwoOptThreeEOptions = ["כן", "לא"] as const;
export type StepTwoOptThreeEOptions = (typeof StepTwoOptThreeEOptions)[number];
export const StepTwoOptThreeFOptions = ["כן", "לא"] as const;
export type StepTwoOptThreeFOptions = (typeof StepTwoOptThreeFOptions)[number];
