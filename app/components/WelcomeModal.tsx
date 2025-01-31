import Image from "next/image";
import React from "react";

import WelcomeStepList from "./WelcomeStepList";
import NextButton from "./NextButton";

const WelcomeModal: React.FC = () => {
  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="welcome-bg">
        <Image
          className="welcome-bg-img"
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

      <div className="welcome-bottomsheet">
        <h2 className="text-[#6042AA] text-[26px] font-medium mb-3 mt-2">
          Bienvenido a Choiz
        </h2>
        <p className="text-[#424B54] text-[16px] mb-7">
          Comienza tu tratamiento en tres pasos:
        </p>
        <WelcomeStepList />
        <NextButton />
      </div>
    </div>
  );
};

export default WelcomeModal;
