import Image from "next/image";
import React from "react";

import { useFormStore } from "../stores/useFormStore";
import { PROGRESS_MAP } from "../utils/constants";
import { NavBarProps } from "../types";

const NavBar: React.FC<NavBarProps> = ({ bgColor = "white" }) => {
  const { step, prevStep } = useFormStore();
  const progressWidth = PROGRESS_MAP[step - 1];

  return (
    <div className={`fixed top-0 left-0 flex-col w-full p-3 bg-${bgColor}`}>
      <div className="navbar-container">
        <Image
          src="assets/icons/arrow.svg"
          onClick={prevStep}
          alt="Arrow Icon"
          width={18}
          height={18}
        />
        <Image
          src="assets/icons/choiz-black.svg"
          className="icon-black"
          alt="Choiz Icon"
          width={70}
          height={70}
        />
        <Image
          src="assets/icons/whatsapp.svg"
          alt="Whatsapp Icon"
          width={22}
          height={22}
        />
      </div>
      <div className="progress-bar-container">
        <div
          style={{ width: `${progressWidth}%` }}
          className="progress-bar"
        ></div>
      </div>
    </div>
  );
};

export default NavBar;
