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
  NETT_SALARY = 'Sueldo Neto',
  PARO = 'Paro',
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
