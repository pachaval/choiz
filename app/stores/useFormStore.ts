import { create } from "zustand";

import { isOtroSelected, isStepWithIcon } from "../utils/helpers";
import { MEDICATIONS, OTRO, STEPS } from "../utils/constants";
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
      if (
        state.step === STEPS.PROBLEMAS &&
        isOtroSelected(state.answers[STEPS.PROBLEMAS])
      ) {
        const updatedAnswers = state.answers[STEPS.PROBLEMAS].map((answer) =>
          answer.startsWith(OTRO) ? `Otro: ${state.manualReason}` : answer
        );
        return {
          step: state.step + 1,
          answers: {
            ...state.answers,
            [STEPS.PROBLEMAS]: updatedAnswers,
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

      if (isStepWithIcon(step)) {
        if (answer.startsWith("No")) {
          return {
            answers: {
              ...state.answers,
              [step]: [answer],
            },
            manualReason: "",
            recommendation:
              step === STEPS.CONDICIONES
                ? MEDICATIONS.DUTCAPS
                : state.recommendation,
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
          if (step === STEPS.CONDICIONES) {
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
