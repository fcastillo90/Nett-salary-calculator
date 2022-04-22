export interface NettSalaryProps {
  anualSalary: number;
  numberOfPays: number;
  employmentType: EmploymentType;
}

export interface NettSalaryCalculator {
  monthlySalary: number;
  irpf: string;
  anualIRPF: number;
  ss: number;
  anualSS: number;
}

export enum EmploymentType {
  GENERAL = 'general',
  TIMED = 'timed',
}

export enum StatusBarStyle {
  DEFAULT = 'default',
  LIGHT_CONTENT = 'light-content',
  DARK_CONTENT = 'dark-content',
} 
export enum StatusBarAnimation {
  NONE = 'none',
  SLIDE = 'slide',
  FADE = 'fade',
}
export enum PageNames {
  NETT_SALARY = 'nettSalary',
  PARO = 'paro',
}

export enum PageTitle {
  NET_SALARY = 'Sueldo Neto',
  PARO = 'Cuantía del Paro',
}

export interface DataType {
  value: string;
  label: string;
}

export enum NettSalaryInputNames {
  ANUAL_SALARY = 'anualSalary',
  NUMBER_OF_PAYS = 'numberOfPays',
  EMPLOYMENT_TYPE = 'employmentType',
  PROFESSION_TYPE = 'professionType',
  AGE = 'age',
  GEO_MOVILITY = 'geoMovility',
  FAMILY_STATUS = 'familyStatus',
  DISCAPACITY_TYPE = 'discapacityType',
}

export enum ParoInputNames {
  AVERAGE_SALARY = 'averageSalary',
  TIME_WORKED = 'timeWorked',
  CHILDREN_IN_CHARGE = 'childInCharge',
}

export interface GetParoProps {
  averageSalary: number;
  childInCharge: string;
}

export enum LanguageWords {
  BUTTON_CALCULATE = 'BUTTON_CALCULATE',
  BUTTON_RECALCULATE = 'BUTTON_RECALCULATE',
  PAGE_TITLE_NET_INCOME = 'PAGE_TITLE_NET_INCOME',
  PAGE_TITLE_PARO = 'PAGE_TITLE_PARO',
  INPUT_LABEL_NI_ANUAL_SALARY = 'INPUT_LABEL_NI_ANUAL_SALARY',
  INPUT_LABEL_NI_NUMBER_OF_PAYS = 'INPUT_LABEL_NI_NUMBER_OF_PAYS',
  INPUT_LABEL_NI_EMPLOYMENT_TYPE = 'INPUT_LABEL_NI_EMPLOYMENT_TYPE',
  INPUT_LABEL_NI_PROFESSION_TYPE = 'INPUT_LABEL_NI_PROFESSION_TYPE',
  INPUT_LABEL_NI_AGE = 'INPUT_LABEL_NI_AGE',
  INPUT_LABEL_NI_GEO_MOVILITY = 'INPUT_LABEL_NI_GEO_MOVILITY',
  INPUT_LABEL_NI_FAMILY_STATUS = 'INPUT_LABEL_NI_FAMILY_STATUS',
  INPUT_LABEL_NI_DISCAPACITY_TYPE = 'INPUT_LABEL_NI_DISCAPACITY_TYPE',
  INPUT_PLACEHOLDER_NI_ANUAL_SALARY = 'INPUT_PLACEHOLDER_NI_ANUAL_SALARY',
  INPUT_PLACEHOLDER_NI_NUMBER_OF_PAYS = 'INPUT_PLACEHOLDER_NI_NUMBER_OF_PAYS',
  INPUT_PLACEHOLDER_NI_AGE = 'INPUT_PLACEHOLDER_NI_AGE',
  INPUT_LABEL_PARO_AVERAGE_SALARY = 'INPUT_LABEL_PARO_AVERAGE_SALARY',
  INPUT_LABEL_PARO_TIME_WORKED = 'INPUT_LABEL_PARO_TIME_WORKED',
  INPUT_LABEL_PARO_CHILDREN_IN_CHARGE = 'INPUT_LABEL_PARO_CHILDREN_IN_CHARGE',
  INPUT_PLACEHOLDER_PARO_AVERAGE_SALARY = 'INPUT_PLACEHOLDER_PARO_AVERAGE_SALARY',
  DISCLAIMER = 'DISCLAIMER',
  RESULTS_NI_TITLE = 'RESULTS_NI_TITLE',
  RESULTS_NI_MONTHLY_IRPF = 'RESULTS_NI_MONTHLY_IRPF',
  RESULTS_NI_MONTHLY_SS = 'RESULTS_NI_MONTHLY_SS',
  RESULTS_NI_ANUAL_IRPF = 'RESULTS_NI_ANUAL_IRPF',
  RESULTS_NI_ANUAL_SS = 'RESULTS_NI_ANUAL_SS',
  RESULTS_PARO_TITLE = 'RESULTS_PARO_TITLE',
}

export type LanguagesAvailable = 'es' | 'en';