import clsx from "clsx";
import { useFormStore } from "../store/useFormStore";

interface NextButtonProps {
  disabled?: boolean;
  label?: string;
}
const NextButton = ({
  disabled = false,
  label = "Continuar",
}: NextButtonProps) => {
  const { nextStep, step, answers } = useFormStore();

  const handleNext = () => {
    if (step === 2 && answers[step]?.includes("Otro")) {
      // ACA LA LOGICA DE AGREGAR EL TEXTO MANUAL DE OTRO
    }
    nextStep();
  };

  return (
    <button
      className={clsx(
        "w-full h-[56px] text-white font-larsseit text-[16px] py-2 rounded-[48px] mt-10",
        disabled ? "bg-[#bab7b7ad]" : "bg-[#292929]"
      )}
      onClick={handleNext}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default NextButton;
