import React, { useMemo } from "react";
import Image from "next/image";

import { useFormStore } from "../stores/useFormStore";
import { PROGRESS_MAP } from "../utils/constants";
import { NavBarProps } from "../types";

const NavBar: React.FC<NavBarProps> = React.memo(({ bgColor = "white" }) => {
  const prevStep = useFormStore((state) => state.prevStep);
  const step = useFormStore((state) => state.step);

  const progressWidth = useMemo(() => PROGRESS_MAP[step - 1], [step]);

  return (
    <div
      className={`fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-sm px-4 py-3 z-10`}
      style={{ backgroundColor: bgColor }}
    >
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
          priority
        />
        <Image
          src="assets/icons/whatsapp.svg"
          alt="Whatsapp Icon"
          width={22}
          height={22}
          priority
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
});

NavBar.displayName = "NavBar";

export default NavBar;
