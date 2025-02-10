import { memo } from "react";
import { MdContentCopy, MdCheckCircle } from "react-icons/md";

const CopyBlock = ({
  title,
  content,
  state,
  copyType,
  handleCopy
}: {
  title: string;
  content: string;
  state: boolean;
  copyType: string;
  handleCopy: (copyType: string) => void;
}) => (
  <div className="w-full flex flex-col justify-center items-start gap-2 whitespace-pre-wrap break-words">
    <p className="text-gray-300 ml-2 text-xs xl:text-sm">{title}</p>
    <div className="w-full flex justify-between items-center p-4 bg-gray-200 rounded-md text-blue-600 overflow-x-auto relative">
      <p className="text-xs xl:text-sm">{content}</p>
      {state ? (
        <div className="flex justify-center items-center gap-[2px] xl:gap-2 absolute top-2 right-2 z-10">
          <MdCheckCircle className="text-green-600 text-xs xl:text-sm" /> Copied!
        </div>
      ) : (
        <MdContentCopy className="text-black cursor-pointer text-xs xl:text-sm  absolute top-2 right-2 z-10" onClick={() => handleCopy(copyType)} />
      )}
    </div>
  </div>
);

export default memo(CopyBlock);
