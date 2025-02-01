export type FormState = {
  setAnswer: (step: number, answer: string) => void;
  setManualReason: (reason: string) => void;
  setRecommendation: (reco: string) => void;
  answers: Record<number, string[]>;
  recommendation: string;
  manualReason: string;
  nextStep: () => void;
  prevStep: () => void;
  step: number;
};

export interface MultiChoiceProps {
  step: number;
  header: string;
  subheader?: string;
  options: string[];
}
export interface NextButtonProps {
  disabled?: boolean;
  label?: string;
}

export interface NavBarProps {
  bgColor?: string;
}

export interface FaqsProps {
  faqs: Faq[];
}

export type Faq = {
  question: string;
  answer: string;
};
