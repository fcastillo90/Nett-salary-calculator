import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { LanguageWords } from "../types";

const resources = {
  en: {
    translation: {
      [LanguageWords.BUTTON_CALCULATE]: "Calculate",
      [LanguageWords.BUTTON_RECALCULATE]: "Recalculate",
      [LanguageWords.PAGE_TITLE_NET_INCOME]: "Net Income",
      [LanguageWords.PAGE_TITLE_PARO]: "Unemployment",
      [LanguageWords.INPUT_LABEL_NI_ANUAL_SALARY]: "Annual salary",
      [LanguageWords.INPUT_LABEL_NI_NUMBER_OF_PAYS]: "Number of pays",
      [LanguageWords.INPUT_LABEL_NI_EMPLOYMENT_TYPE]: "Employment type",
      [LanguageWords.INPUT_LABEL_NI_PROFESSION_TYPE]: "Profession category",
      [LanguageWords.INPUT_LABEL_NI_AGE]: "Age",
      [LanguageWords.INPUT_LABEL_NI_GEO_MOVILITY]: "I have geographical mobility",
      [LanguageWords.INPUT_LABEL_NI_FAMILY_STATUS]: "Family status",
      [LanguageWords.INPUT_LABEL_NI_DISCAPACITY_TYPE]: "Do you suffer from any type of disability?",
      [LanguageWords.INPUT_LABEL_PARO_AVERAGE_SALARY]: "Average contribution base in the last 6 months",
      [LanguageWords.INPUT_LABEL_PARO_TIME_WORKED]: "Time worked in the last 6 years (in days)",
      [LanguageWords.INPUT_LABEL_PARO_CHILDREN_IN_CHARGE]: "Number of children in charge",
      [LanguageWords.DISCLAIMER]: "The results of the simulation are based on the data entered by the user and are merely informative and indicative, in no case are they binding.",
      [LanguageWords.RESULTS_NI_TITLE]: "Monthly net salary",
      [LanguageWords.RESULTS_NI_MONTHLY_IRPF]: "I.R.P.F./Month",
      [LanguageWords.RESULTS_NI_MONTHLY_SS]: "S.S./Month",
      [LanguageWords.RESULTS_NI_ANUAL_IRPF]: "I.R.P.F./Year",
      [LanguageWords.RESULTS_NI_ANUAL_SS]: "S.S./Year",
      [LanguageWords.RESULTS_PARO_TITLE]: "Unemployment amount",
      [LanguageWords.INPUT_PLACEHOLDER_NI_ANUAL_SALARY]: 'Ex: 24000',
      [LanguageWords.INPUT_PLACEHOLDER_NI_NUMBER_OF_PAYS]: 'Ex: 12',
      [LanguageWords.INPUT_PLACEHOLDER_NI_AGE]: 'Ex: 30',
      [LanguageWords.INPUT_PLACEHOLDER_PARO_AVERAGE_SALARY]: 'Ex: 1500',
    }
  },
  es: {
    translation: {
      [LanguageWords.BUTTON_CALCULATE]: "Calcular",
      [LanguageWords.BUTTON_RECALCULATE]: "Recalcular",
      [LanguageWords.PAGE_TITLE_NET_INCOME]: "Sueldo Neto",
      [LanguageWords.PAGE_TITLE_PARO]: "Cuantía del Paro",
      [LanguageWords.INPUT_LABEL_NI_ANUAL_SALARY]: "Salario bruto anual",
      [LanguageWords.INPUT_LABEL_NI_NUMBER_OF_PAYS]: "Número de pagas",
      [LanguageWords.INPUT_LABEL_NI_EMPLOYMENT_TYPE]: "Tipo de contrato",
      [LanguageWords.INPUT_LABEL_NI_PROFESSION_TYPE]: "Categoría profesional",
      [LanguageWords.INPUT_LABEL_NI_AGE]: "Edad",
      [LanguageWords.INPUT_LABEL_NI_GEO_MOVILITY]: "Tengo movilidad geográfica",
      [LanguageWords.INPUT_LABEL_NI_FAMILY_STATUS]: "Situación familiar",
      [LanguageWords.INPUT_LABEL_NI_DISCAPACITY_TYPE]: "¿Padeces algún tipo de discapacidad?",
      [LanguageWords.INPUT_LABEL_PARO_AVERAGE_SALARY]: "Media de base de cotización en los últimos 6 meses",
      [LanguageWords.INPUT_LABEL_PARO_TIME_WORKED]: "Período de tiempo trabajado en los últimos 6 años (en días)",
      [LanguageWords.INPUT_LABEL_PARO_CHILDREN_IN_CHARGE]: "Número de hijos a cargo",
      [LanguageWords.DISCLAIMER]: "Los resultados de la simulación se basan en los datos introducidos por el usuario y tienen valor meramente informativos y orientativos, en ningún caso son vinculantes.",
      [LanguageWords.RESULTS_NI_TITLE]: "Salario mensual",
      [LanguageWords.RESULTS_NI_MONTHLY_IRPF]: 'I.R.P.F./mes',
      [LanguageWords.RESULTS_NI_MONTHLY_SS]: 'S.S./mes',
      [LanguageWords.RESULTS_NI_ANUAL_IRPF]: 'Total I.R.P.F/año',
      [LanguageWords.RESULTS_NI_ANUAL_SS]: 'Total S.S./año',
      [LanguageWords.RESULTS_PARO_TITLE]: 'Importe Paro',
      [LanguageWords.INPUT_PLACEHOLDER_NI_ANUAL_SALARY]: 'Ej: 24000',
      [LanguageWords.INPUT_PLACEHOLDER_NI_NUMBER_OF_PAYS]: 'Ej: 12',
      [LanguageWords.INPUT_PLACEHOLDER_NI_AGE]: 'Ej: 30',
      [LanguageWords.INPUT_PLACEHOLDER_PARO_AVERAGE_SALARY]: 'Ej: 1500',
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "es", 
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;