import { RefObject, SetStateAction, useState } from "react";
import { toast } from "react-toastify";
import { RxCross2 } from "react-icons/rx";
import deleteSpaceAction from "../../../actions/spaceActions/deleteSpace";

export default function DeleteSpaceCard({
  deleteSpace,
  setDeleteSpace,
  deleteCardRef
}: {
  deleteSpace: string;
  setDeleteSpace: React.Dispatch<SetStateAction<string>>;
  deleteCardRef:RefObject<HTMLDivElement>
}) {
  const [clickedOnDeleteInput, setClickedOnDeleteInput] = useState(false);
  const [deleteSpaceInput, setDeleteSpaceInput] = useState("");
  const [loadingDelete, setLoadingDelete] = useState(false);

  async function handleDelete() {
    setLoadingDelete(true);

    if (deleteSpaceInput.trim().toLowerCase() !== deleteSpace.trim().toLowerCase()) {
      toast.error("😕 Space name doesn't match.");
      setLoadingDelete(false);
      return;
    }

    try {
      const response = await deleteSpaceAction(deleteSpace);
      if (response.success) {
        toast.success("🚀 Space deleted successfully!");
        setDeleteSpace(""); // ✅ Only reset after success
      } else {
        toast.error("😕 Couldn't delete space.");
      }
    } catch (error) {
      toast.error(`😕 ${(error as Error).message || "Unknown error occurred."}`);
    } finally {
      setLoadingDelete(false);
    }
  }

  return (
    <div ref={deleteCardRef}
      className="absolute top-0 lg:left-10 xl:left-1/4 bg-white rounded-md flex flex-col gap-4 justify-center items-center md:px-4 w-[95%] lg:w-[600px] p-2 md:py-6"
      onClick={() => setClickedOnDeleteInput(false)}
    >
      {/* Close Button */}
      <div className="relative w-full">
        <RxCross2 className="absolute top-2 right-2 text-xl cursor-pointer" onClick={() => setDeleteSpace("")} />
      </div>

      {/* Title */}
      <p className="text-xl md:text-3xl font-bold text-black my-2 sm:my-5">Delete this space</p>

      {/* Warning Message */}
      <div className="flex flex-col justify-center items-center text-gray-700 text-sm sm:text-base">
        <p>Once deleted, all feedback in this space will be gone forever.</p>
        <p>Please be certain!</p>
      </div>

      {/* Confirmation Input */}
      <label htmlFor="spaceDelete" className="sm:flex sm:justify-center sm:items-center gap-2 w-full">
        Type your space name <span className="text-red-600 font-bold">{deleteSpace}</span> to confirm
      </label>

      <input
        id="spaceDelete"
        placeholder={deleteSpace}
        value={deleteSpaceInput}
        onChange={(e) => setDeleteSpaceInput(e.target.value)}
        className={`p-2 py-4 w-full ${clickedOnDeleteInput ? "border-[2px] border-blue-500 outline-none" : "border border-gray-700"}`}
        onClick={(e) => {
          setClickedOnDeleteInput(true);
          e.stopPropagation();
        }}
      />

      {/* Delete Button */}
      <button
        className={`${loadingDelete ? "bg-red-400" : "bg-red-600"} p-2 w-full text-white flex items-center justify-center gap-2`}
        disabled={loadingDelete}
        onClick={handleDelete}
      >
        {loadingDelete && (
          <svg className="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
        )}
        {loadingDelete ? "Deleting..." : "Confirm delete"}
      </button>
    </div>
  );
}
