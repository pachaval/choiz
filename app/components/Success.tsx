import { useFormStore } from "../stores/useFormStore";
import { STEPS_DATA } from "../utils/constants";

const Success = () => {
  const { answers } = useFormStore();

  return (
    <div className="flex flex-col">
      <h2 className="font-header mb-3">Tus respuestas:</h2>
      <div className="space-y-5 bg-white rounded-[36px] p-7 flex flex-col shadow-box">
        {STEPS_DATA.map(({ step, header }) => {
          const stepAnswers = answers[step];

          return (
            <div key={step}>
              <p className="text-m font-bold leading-[25px] text-left">
                {header}
              </p>
              <p className="text-base text-[#7D7D7D] font-normal leading-[20px] text-left mb-4">
                {stepAnswers.join(", ")}{" "}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Success;
