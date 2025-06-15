

import { useState } from "react";

export default function InterviewQuestion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex flex-wrap text-[16px] w-full relative"
      >
        {question}
        <svg
          className="absolute transform rotate-90 right-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="24"
          height="24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {isOpen && (
        <p className="text-[#4A4A4A] text-[16px] mt-2">{answer}</p>
      )}

      <hr className="opacity-30 border w-full mt-3 mb-3" />
    </div>
  );
}
