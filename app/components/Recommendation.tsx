import { Faq } from "../types";
import Faqs from "./Faqs";
import MedicationBox from "./MedicationBox";
interface RecommendationProps {
  faqs: Faq[];
}
const Recommendation = ({ faqs }: RecommendationProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="font-header mb-3">
        Tratamiento recomendado en base a tus respuestas
      </h2>
      <MedicationBox />
      <Faqs faqs={faqs} />
    </div>
  );
};

export default Recommendation;
