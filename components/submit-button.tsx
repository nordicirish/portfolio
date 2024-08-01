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
      className="group flex items-center justify-center h-[3rem] w-[8rem] bg-red-900 outline-none text-white rounded-full transition-all focus:scale-110 hover:scale-110 hover:bg-red-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65
    dark:bg-fuchsia-950 dark:hover:bg-fuchsia-900 dark:active:bg-fuchsia-950 dark:disabled:bg-fuchsia-800 dark:disabled:bg-opacity-50"
      disabled={pending}
    >
      {/* disabled if pending is true */}
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
