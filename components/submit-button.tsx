import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      title="Submit the message"
      aria-label="Submit the message"
      type="submit"
      className="group flex items-center justify-center h-[3rem] w-[8rem] bg-blue-800 outline-none text-white rounded-lg transition-all duration-300 ease-out focus:scale-110 hover:scale-110 hover:bg-blue-900 active:scale-110 disabled:scale-100 disabled:bg-opacity-65
    dark:bg-fuchsia-900 dark:hover:bg-fuchsia-950 dark:active:bg-fuchsia-900 dark:disabled:bg-fuchsia-800 dark:disabled:bg-opacity-50 shadow-lg dark:shadow-md"
      disabled={pending}
    >
      {/* disabled if pending is true */}
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs ml-1 opacity-70 transition group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
