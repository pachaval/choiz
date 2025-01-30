import Image from "next/image";
import { WELCOME_STEPS_DATA } from "../utils/constants";

const StepsList = () => {
  return (
    <div className="flex flex-col">
      {WELCOME_STEPS_DATA.map((step, index) => (
        <div key={index} className="flex space-x-3 relative">
          <div className="flex flex-col items-center">
            <div
              className={`w-5 h-5 border-2 border-[#E0E0E0] rounded-full ${
                index === 0 ? "bg-[#F9F9F9]" : "bg-white"
              }`}
            ></div>
            {index < WELCOME_STEPS_DATA.length - 1 && (
              <div className="w-0.5 h-8 bg-[#E0E0E0]"></div>
            )}
          </div>

          <div className="flex items-start">
            <span className="text-[#666768] text-[14px]">{step.text}</span>
            {step.time && (
              <div className="ml-3 flex items-center text-gray-500 text-sm">
                <Image
                  src="/clock.svg"
                  alt="Clock"
                  width={13}
                  height={13}
                  className="mr-1"
                />
                <span className="text-[#9F7CF7]">{step.time}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepsList;
