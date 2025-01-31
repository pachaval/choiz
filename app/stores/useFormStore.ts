import { create } from "zustand";
import { MEDICATIONS } from "../utils/constants";
import { isOtroSelected } from "../utils/helpers";

type FormState = {
  step: number;
  answers: Record<number, string[]>;
  manualReason: string;
  recommendation: string;
  nextStep: () => void;
  prevStep: () => void;
  setAnswer: (step: number, answer: string) => void;
  setManualReason: (reason: string) => void;
  setRecommendation: (reco: string) => void;
};

export const useFormStore = create<FormState>((set) => ({
  step: 1,
  answers: {},
  manualReason: "",
  recommendation: "",
  nextStep: () =>
    set((state) => {
      if (state.step === 2 && isOtroSelected(state.answers[2])) {
        const updatedAnswers = state.answers[2].map((answer) =>
          answer.startsWith("Otro") ? `Otro: ${state.manualReason}` : answer
        );
        return {
          step: state.step + 1,
          answers: {
            ...state.answers,
            2: updatedAnswers,
          },
        };
      }

      return { step: state.step + 1 };
    }),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  setManualReason: (reason) => set({ manualReason: reason }),
  setRecommendation: (reco) => set({ recommendation: reco }),
  setAnswer: (step, answer) =>
    set((state) => {
      const currentAnswers = state.answers[step] || [];

      if (step === 3) {
        return {
          answers: {
            ...state.answers,
            [step]: [answer],
          },
        };
      }

      if ([2, 4, 5].includes(step)) {
        if (answer.startsWith("No")) {
          return {
            answers: {
              ...state.answers,
              [step]: [answer],
            },
            manualReason: "",
            recommendation:
              step === 4 ? MEDICATIONS.DUTCAPS : state.recommendation,
          };
        } else {
          const updatedAnswers = currentAnswers.filter(
            (a) => !a.startsWith("No")
          );

          const newAnswers = updatedAnswers.includes(answer)
            ? updatedAnswers.filter((a) => a !== answer)
            : [...updatedAnswers, answer];

          let recommendation = state.recommendation;
          if (step === 4) {
            if (newAnswers.some((a) => a.includes("Cáncer"))) {
              recommendation = MEDICATIONS.MINCAPS;
            } else if (newAnswers.some((a) => !a.startsWith("No"))) {
              recommendation = MEDICATIONS.DUTGEL;
            } else {
              recommendation = MEDICATIONS.DUTCAPS;
            }
          }

          return {
            answers: {
              ...state.answers,
              [step]: newAnswers,
            },
            recommendation,
          };
        }
      }

      return {
        answers: {
          ...state.answers,
          [step]: currentAnswers.includes(answer)
            ? currentAnswers.filter((a) => a !== answer)
            : [...currentAnswers, answer],
        },
      };
    }),
}));
