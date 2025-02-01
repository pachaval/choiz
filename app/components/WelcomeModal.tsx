import Image from "next/image";
import React from "react";

import WelcomeStepList from "./WelcomeStepList";
import NextButton from "./NextButton";

const WelcomeModal: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="flex-1 overflow-hidden relative bg-[#6042AA] flex items-start">
        <Image
          className="object-cover scale-[1.8] object-[center_-60px]"
          src="/assets/images/welcome.jpeg"
          alt="Welcome Background"
          quality={50}
          priority
          fill
        />
        <div className="absolute top-8 left-8 z-10">
          <Image
            src="assets/icons/choiz.svg"
            alt="Decorative Icon"
            width={87}
            height={87}
          />
        </div>
      </div>

      <div className="flex flex-col bg-white rounded-t-3xl shadow-lg p-7 relative -mt-6 min-h-fit max-h-[50vh]">
        <h2 className="text-[#6042AA] text-[26px] font-medium mb-3 mt-2">
          Bienvenido a Choiz
        </h2>
        <p className="text-[#424B54] text-[16px] mb-5">
          Comienza tu tratamiento en tres pasos:
        </p>
        <WelcomeStepList />
        <div className="flex-grow" />
        <NextButton />
      </div>
    </div>
  );
};

export default WelcomeModal;
