export const CONTRACT_TYPE = {
  es: [
    { value: 'general', label: 'General', key: 'general' },
    { value: 'meses', label: 'Inferior a 12 meses', key: 'meses' },
  ],
  en: [
    { value: 'general', label: 'General', key: 'general' },
    { value: 'meses', label: 'Less than 12 months', key: 'meses' },
  ]
}

export const PROFESSION_TYPE = {
  es: [
    { value: 'bachelor', label: 'Ingenieros y Licenciados', key: 'bachelor' },
    { value: 'technician', label: 'Ingenieros Técnicos, Peritos y Ayudantes Titulados', key: 'technician' },
    { value: 'admin', label: 'Jefes Administrativos y de Taller', key: 'admin' },
    { value: 'untitled', label: 'Ayudantes no Titulados', key: 'untitled' },
    { value: 'official', label: 'Oficiales Administrativos', key: 'official' },
    { value: 'junior', label: 'Subalternos', key: 'junior' },
    { value: 'auxiliary', label: 'Auxiliares Administrativos', key: 'auxiliary' },
    { value: 'first', label: 'Oficiales de primera y segunda', key: 'first' },
    { value: 'second', label: 'Oficiales de tercera y Especialistas', key: 'second' },
    { value: 'pawn', label: 'Peones', key: 'pawn' },
    { value: 'underAge', label: 'Trabajadores menores de dieciocho años', key: 'underAge' },
  ],
  en: [
    { value: 'bachelor', label: 'Engineers and Graduates', key: 'bachelor' },
    { value: 'technician', label: 'Technical Engineers, Experts and Qualified Assistants', key: 'technician' },
    { value: 'admin', label: 'Administrative and Workshop Managers', key: 'admin' },
    { value: 'untitled', label: 'Non-qualified assistants', key: 'untitled' },
    { value: 'official', label: 'Administrative Officers', key: 'official' },
    { value: 'junior', label: 'Subordinates', key: 'junior' },
    { value: 'auxiliary', label: 'Administrative Assistants', key: 'auxiliary' },
    { value: 'first', label: 'First and second officers', key: 'first' },
    { value: 'second', label: 'Third Officers and Specialists', key: 'second' },
    { value: 'pawn', label: 'Pawns', key: 'pawn' },
    { value: 'underAge', label: 'Workers under the age of eighteen', key: 'underAge' },
  ]
}

export const FAMILY_STATUS = {
  es: [
    { value: 'single', label: 'Soltero', key: 'single' },
    { value: 'married', label: 'Casado', key: 'married' },
    { value: 'divorced', label: 'Divorciado o separado', key: 'divorced' },
    { value: 'widow', label: 'Viudo', key: 'widow' },
  ],
  en: [
    { value: 'single', label: 'Single', key: 'single' },
    { value: 'married', label: 'Married', key: 'married' },
    { value: 'divorced', label: 'Divorced or Separated', key: 'divorced' },
    { value: 'widow', label: 'Widow', key: 'widow' },
  ],
}

export const DISCAPACITY_TYPE = {
  es: [
    { value: 'none', label: 'Sin discapacidad', key: 'none' },
    { value: 'minor', label: 'Entre el 33% y el 65%', key: 'minor' },
    { value: 'max', label: 'Mayor a 65%', key: 'max' },
  ],
  en: [
    { value: 'none', label: 'Without Disability', key: 'none' },
    { value: 'minor', label: 'Between 33% and 65%', key: 'minor' },
    { value: 'max', label: 'Greater than 65%', key: 'max' },
  ],
}

export const CHILDREN_IN_CHARGE = {
  es: [
    { value: 'none', label: '0', key: 'none' },
    { value: 'one', label: '1', key: 'one' },
    { value: 'more', label: 'Más de uno', key: 'more' },
  ],
  en: [
    { value: 'none', label: '0', key: 'none' },
    { value: 'one', label: '1', key: 'one' },
    { value: 'more', label: 'More than one', key: 'more' },
  ],
}

export const TIME_WORKED = {
  es: [
    { value: '0', label: 'Hasta 89', key: '0' },
    { value: '1', label: 'De 90 a 119', key: '1' },
    { value: '2', label: 'De 120 a 149', key: '2' },
    { value: '3', label: 'De 150 a 179', key: '3' },
    { value: '4', label: 'De 180 a 359', key: '4' },
    { value: '5', label: 'De 360 a 539', key: '5' },
    { value: '6', label: 'De 540 a 719', key: '6' },
    { value: '7', label: 'De 720 a 899', key: '7' },
    { value: '8', label: 'De 900 a 1079', key: '8' },
    { value: '9', label: 'De 1080 a 1259', key: '9' },
    { value: '10', label: 'De 1260 a 1439', key: '10' },
    { value: '11', label: 'De 1440 a 1619', key: '11' },
    { value: '12', label: 'De 1620 a 1799', key: '12' },
    { value: '13', label: 'De 1800 a 1989', key: '13' },
    { value: '14', label: 'De 1990 a 2159', key: '14' },
    { value: '15', label: 'Más de 2160', key: '15' },
  ],
  en: [
    { value: '0', label: 'Up to 89', key: '0' },
    { value: '1', label: 'From 90 to 119', key: '1' },
    { value: '2', label: 'From 120 to 149', key: '2' },
    { value: '3', label: 'From 150 to 179', key: '3' },
    { value: '4', label: 'From 180 to 359', key: '4' },
    { value: '5', label: 'From 360 to 539', key: '5' },
    { value: '6', label: 'From 540 to 719', key: '6' },
    { value: '7', label: 'From 720 to 899', key: '7' },
    { value: '8', label: 'From 900 to 1079', key: '8' },
    { value: '9', label: 'From 1080 to 1259', key: '9' },
    { value: '10', label: 'From 1260 to 1439', key: '10' },
    { value: '11', label: 'From 1440 to 1619', key: '11' },
    { value: '12', label: 'From 1620 to 1799', key: '12' },
    { value: '13', label: 'From 1800 to 1989', key: '13' },
    { value: '14', label: 'From 1990 to 2159', key: '14' },
    { value: '15', label: 'More than 2160', key: '15' },
  ]
}

export const NONE_MIN = 501.89
export const NONE_MAX = 1098.09
export const ONE_MIN = 671.40
export const ONE_MAX = 1254.86
export const MORE_MIN = 671.40
export const MORE_MAX = 1411.83

export const LANGUAGES = [
  { label: 'Español', value: 'es' },
  { label: 'English', value: 'en' }, 
]