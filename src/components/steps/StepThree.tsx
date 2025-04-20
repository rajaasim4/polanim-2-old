import { useAtom } from "jotai";
import { documentOfFamilyMemberOptionsAtom } from "../../store";
import cn from "../../utils/cn";
import { documentOfFamilyMemberOptions } from "../../utils/options";
import { stepContainerStyles, subHeadingStyles } from "../../utils/styles";

const StepThree = () => {
    const [documentOfFamilyMember, setDocumentOfFamilyMember] = useAtom(
        documentOfFamilyMemberOptionsAtom
    );
    return (
        <div className={cn(stepContainerStyles, "mb-4")}>
            <h3 className={cn(subHeadingStyles, "mb-4 text-2xl")}>
     האם יש לך מסמכים המעידים על הקשר הגרמני / אוסטרי?
            </h3>
            <div className="text-xl flex gap-4 mb-4 flex-wrap justify-center">
                {documentOfFamilyMemberOptions.map((option, index) => (
                    <span
                        key={index}
                        className={cn(
                            "w-36 md:w-52 px-2 py-4 rounded-lg bg-white cursor-pointer text-lg md:text-3xl text-center",
                            {
                                "bg-themeBlue text-white":
                                    documentOfFamilyMember === option,
                            }
                        )}
                        onClick={() => {
                            setDocumentOfFamilyMember(option);
                        }}
                    >
                        {option}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default StepThree;
