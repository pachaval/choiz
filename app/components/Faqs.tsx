import React, { useState } from "react";
import { motion } from "framer-motion";

import { ANIMATION } from "../utils/constants";
import { FaqsProps } from "../types";
import Image from "next/image";

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="recommendation-container">
      {faqs.map((faq, index) => (
        <div key={index}>
          <button onClick={() => toggleFaq(index)} className="faq-button">
            {faq.question}
            <Image
              src="assets/icons/chevron.svg"
              alt="Decorative Icon"
              width={18}
              height={18}
            />
          </button>
          {openIndex === index && (
            <motion.div
              className="mt-2 mb-4 text-[#3B3345] text-sm leading-[20px]"
              transition={ANIMATION.transition}
              animate={ANIMATION.anmimate}
              initial={ANIMATION.initial}
              exit={ANIMATION.exit}
            >
              {faq.answer}
            </motion.div>
          )}
          {index < faqs.length - 1 && (
            <hr className="border-t border-[#E0E0E0]" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
