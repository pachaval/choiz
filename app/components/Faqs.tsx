import Image from "next/image";
import React, { useState } from "react";
import { Faq } from "../types";
import { motion } from "framer-motion";

interface FaqsProps {
  faqs: Faq[];
}

const Faqs: React.FC<FaqsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-white rounded-[36px] p-7 mt-6 flex flex-col shadow-box">
      {faqs.map((faq, index) => (
        <div key={index} className="w-full flex-col ">
          <button
            onClick={() => toggleFaq(index)}
            className="w-full flex justify-between items-center text-base text-[#3B3345] font-normal leading-[20px] text-left py-3"
          >
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
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1, ease: "easeOut" }}
              className="mt-2 mb-4 text-[#3B3345] text-sm leading-[20px]"
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
