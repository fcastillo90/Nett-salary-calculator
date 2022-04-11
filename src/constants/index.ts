export const CONTRACT_TYPE = [
  { value: 'general', label: 'General', key: 'general' },
  { value: 'meses', label: 'Inferior a 12 meses', key: 'meses' },
]

export const PROFESSION_TYPE = [
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
]

export const FAMILY_STATUS = [
  { value: 'single', label: 'Soltero', key: 'single' },
  { value: 'married', label: 'Casado', key: 'married' },
  { value: 'divorced', label: 'Divorciado o separado', key: 'divorced' },
  { value: 'widow', label: 'Viudo', key: 'widow' },
]

export const DISCAPACITY_TYPE = [
  { value: 'none', label: 'Sin discapacidad', key: 'none' },
  { value: 'minor', label: 'Entre el 33% y el 65%', key: 'minor' },
  { value: 'max', label: 'Mayor a 65%', key: 'max' },
]

export const CHILDREN_IN_CHARGE = [
  { value: 'none', label: '0', key: 'none' },
  { value: 'one', label: '1', key: 'one' },
  { value: 'more', label: 'Más de uno', key: 'more' },
]

export const TIME_WORKED = [
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
]

export const NONE_MIN = 501.89
export const NONE_MAX = 1098.09
export const ONE_MIN = 671.40
export const ONE_MAX = 1254.86
export const MORE_MIN = 671.40
export const MORE_MAX = 1411.83