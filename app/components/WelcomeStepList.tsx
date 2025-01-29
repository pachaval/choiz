import Image from "next/image";

const StepsList = () => {
  const steps = [
    { text: "Completa tu expediente médico", time: "2 min" },
    { text: "Explora las opciones de tratamiento" },
    { text: "Paga y recibe tu tratamiento" },
  ];

  return (
    <div className="flex flex-col">
      {steps.map((step, index) => (
        <div key={index} className="flex space-x-4 relative">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 border-2 border-[#E0E0E0] bg-[#F9F9F9] rounded-full"></div>
            {index < steps.length - 1 && (
              <div className="w-0.5 h-8 bg-[#E0E0E0]"></div>
            )}
          </div>

          <div className="flex items-start">
            <span className="text-[#666768]">{step.text}</span>
            {step.time && (
              <div className="mt-1 ml-2 flex items-center text-gray-500 text-sm">
                <Image
                  src="/clock.svg"
                  alt="Clock"
                  width={16}
                  height={16}
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
