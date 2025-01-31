import Stepper from "./components/Stepper";
import { fetchFaqs } from "./lib/faqs";

const Choiz = async () => {
  const faqs = await fetchFaqs();

  return (
    <main className="bg-gray-50 min-h-screen flex justify-center items-center">
      <Stepper faqs={faqs} />
    </main>
  );
};

export default Choiz;
