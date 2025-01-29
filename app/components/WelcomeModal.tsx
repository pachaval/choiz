import NextButton from "./NextButton";
import Image from "next/image";
import WelcomeStepList from "./WelcomeStepList";

const WelcomeModal = () => {
  return (
    <div className="fixed inset-0 flex flex-col">
      <div className="min-h-[60vh] overflow-hidden relative bg-[#6042AA]">
        <Image
          src="/assets/welcome.jpeg"
          alt="Welcome Background"
          fill
          className="object-cover scale-[1.8] object-[center_-60px]"
          priority
          quality={50}
        />

        <div className="absolute top-8 left-8 z-10">
          <Image
            src="/choiz.svg"
            alt="Decorative Icon"
            width={87}
            height={87}
          />
        </div>
      </div>

      <div className="min-h-[45vh] bg-white rounded-t-3xl shadow-lg p-10 flex flex-col text-left animate-slide-up relative -mt-6">
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
