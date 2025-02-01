import Image from "next/image";
import React from "react";

import WelcomeStepList from "./WelcomeStepList";
import NextButton from "./NextButton";

const WelcomeModal: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center w-full h-full bg-white">
      <div className="w-full max-w-[430px] flex-1 overflow-hidden relative bg-[#6042AA] flex items-start justify-center">
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

      <div className="w-full max-w-[430px] bg-white rounded-t-3xl shadow-lg p-7 relative -mt-6 min-h-fit max-h-[50vh] flex flex-col items-center">
        <h2 className="text-[#6042AA] text-[26px] font-medium mb-3 mt-2 text-center">
          Bienvenido a Choiz
        </h2>
        <p className="text-[#424B54] text-[16px] mb-5 text-center">
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
