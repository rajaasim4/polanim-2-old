import { useAtom } from "jotai";
import { isPrivayReadAtom } from "../store";

const TermsAndPrivacyAgreement = () => {
  const [isPrivacyRead, setIsPrivacyRead] = useAtom(isPrivayReadAtom);
  return (
    <div className="flex mt-4 xsm:mt-2 md:my-4 first-letter gap-2">
      <div className="mt-2">
        <input
          type="checkbox"
          id="privacyCheckbox"
          checked={isPrivacyRead}
          onChange={() => setIsPrivacyRead((prev) => !prev)}
          className="appearance-none w-6 h-6 border-2 border-black bg-transparent checked:bg-themeBlue checked:border-themeBlue cursor-pointer"
        />
      </div>
      <label
        htmlFor="privacyCheckbox"
        className="text-sm font-semibold leading-5"
      >
        קראתי את מדיניות הפרטיות ואני מסכים איתה
        
      </label>
    </div>
  );
};

export default TermsAndPrivacyAgreement;
