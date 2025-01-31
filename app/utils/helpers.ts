export function isOtroSelected(answers: string[]): boolean {
    return answers?.some((answer) => answer.startsWith("Otro"));
  }
  