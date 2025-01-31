import Image from "next/image";
import { useFormStore } from "../stores/useFormStore";

const NavBar = () => {
  const { step, prevStep } = useFormStore();

  const progressMap = [0, 18, 36, 54, 72, 90];
  const progressWidth = progressMap[step - 1] || 0;

  return (
    <div className="flex-col w-full ">
      <div className="w-full flex items-center justify-between py-4">
        <Image
          src="assets/icons/arrow.svg"
          alt="Decorative Icon"
          width={18}
          height={18}
          onClick={prevStep}
        />
        <Image
          src="assets/icons/choiz-black.svg"
          alt="Decorative Icon"
          width={70}
          height={70}
          className="icon-black"
        />
        <Image
          src="assets/icons/whatsapp.svg"
          alt="Decorative Icon"
          width={22}
          height={22}
        />
      </div>
      <div className="w-full bg-[#D3D3D3] rounded-full h-0.5 dark:bg-[#D3D3D3]">
        <div
          className="bg-[#6042AA] h-0.5 rounded-full dark:bg-[#6042AA] transition-all duration-300"
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
