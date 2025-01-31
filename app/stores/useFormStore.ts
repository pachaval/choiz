import { create } from "zustand";

import { MEDICATIONS, OTRO } from "../utils/constants";
import { isOtroSelected } from "../utils/helpers";
import { FormState } from "../types";

export const useFormStore = create<FormState>((set) => ({
  recommendation: "",
  manualReason: "",
  answers: {},
  step: 1,
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  setManualReason: (reason) => set({ manualReason: reason }),
  setRecommendation: (reco) => set({ recommendation: reco }),
  nextStep: () =>
    set((state) => {
      if (state.step === 2 && isOtroSelected(state.answers[2])) {
        const updatedAnswers = state.answers[2].map((answer) =>
          answer.startsWith(OTRO) ? `Otro: ${state.manualReason}` : answer
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

          let newAnswers;
          if (answer === OTRO) {
            newAnswers = isOtroSelected(updatedAnswers)
              ? updatedAnswers.filter((item) => !item.startsWith(OTRO))
              : [...updatedAnswers, answer];
          } else {
            newAnswers = updatedAnswers.includes(answer)
              ? updatedAnswers.filter((a) => a !== answer)
              : [...updatedAnswers, answer];
          }

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
