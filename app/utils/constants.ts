export const STEPS_DATA = [
  {
    step: 2,
    header: "¿Tienes algún problema en el cuero cabelludo?",
    subheader: "Selecciona todas las opciones que apliquen.",
    options: [
      "Dolor repentino y/o enrojecimiento",
      "Caspa",
      "Psoriasis",
      "Quemadura de sol",
      "Otro",
      "No, ninguno de los anteriores",
    ],
  },
  {
    step: 3,
    header: "¿Hay antecedentes de caída del cabello en tu familia?",
    options: ["No", "Si", "No estoy seguro"],
  },
  {
    step: 4,
    header:
      "¿Tienes o has tenido alguna de las siguientes condiciones médicas?",
    subheader: "Selecciona todas las opciones que apliquen.",
    options: [
      "Cáncer de mama",
      "Cáncer de próstata",
      "Presión arterial baja incontrolada",
      "Otras enfermedades autoinmunes o reumáticas",
      "Problemas de tiroides",
      "Enfermedades del corazón",
      "Enfermedades de riñón o hígado",
      "No, ninguna de las anteriores",
    ],
  },
  {
    step: 5,
    header: "¿Tienes o has tenido alguna de estas condiciones de salud mental?",
    subheader: "Selecciona todas las opciones que apliquen.",
    options: [
      "Depresión",
      "Desorden de bipolaridad",
      "Ansiedad",
      "Ataques de pánico",
      "Desorden de estrés postraumático",
      "Esquizofrenia",
      "No, ninguno de los anteriores",
    ],
  },
];

export const WELCOME_STEPS_DATA = [
  { text: "Completa tu expediente médico", time: "2 min" },
  { text: "Explora las opciones de tratamiento" },
  { text: "Paga y recibe tu tratamiento" },
];

export const MEDICATIONS = {
  DUTCAPS: "DUTAXIDIL CAPSULAS",
  DUTGEL: "DUTAXIDIL GEL",
  MINCAPS: "MINOXIDIL CAPSULAS",
};

export const MEDICATION_DETAIL = [
  {
    key: MEDICATIONS.DUTCAPS,
    name: "DUTAXIDIL® Cápsulas",
    specs: "Dutasterida 0.5 mg + Minoxidil 2.5 mg + Biotina 2.5 mg",
    imgPath: "/assets/images/capsulas.png",
  },
  {
    key: MEDICATIONS.DUTGEL,
    name: "DUTAXIDIL® Gel",
    specs:
      "Dutasterida 0.1% + Minoxidil 5 % + Tretinoína 1% + Hidrocortisona 1%",
    imgPath: "/assets/images/dutgel.png",
  },
  {
    key: MEDICATIONS.MINCAPS,
    name: "Minoxidil® Cápsulas",
    specs: "Minoxidil 2.5 mg + Biotina 2.5 mg",
    imgPath: "/assets/images/capsulas.png",
  },
];

export const PROGRESS_MAP = [0, 18, 36, 54, 72, 90, 100];

export const ANIMATION = {
  initial: { opacity: 0, y: 10 },
  anmimate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
  transition: { duration: 0.1, ease: "easeOut" },
};

export const OTRO = "Otro";
