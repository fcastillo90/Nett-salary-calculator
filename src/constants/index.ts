export const CONTRACT_TYPE = [
  { value: 'general', label: 'General' },
  { value: 'meses', label: 'Inferior a 12 meses' },
]

export const PROFESSION_TYPE = [
  { value: 'bachelor', label: 'Ingenieros y Licenciados' },
  { value: 'technician', label: 'Ingenieros Técnicos, Peritos y Ayudantes Titulados' },
  { value: 'admin', label: 'Jefes Administrativos y de Taller' },
  { value: 'untitled', label: 'Ayudantes no Titulados' },
  { value: 'official', label: 'Oficiales Administrativos' },
  { value: 'junior', label: 'Subalternos' },
  { value: 'auxiliary', label: 'Auxiliares Administrativos' },
  { value: 'first', label: 'Oficiales de primera y segunda' },
  { value: 'second', label: 'Oficiales de tercera y Especialistas' },
  { value: 'pawn', label: 'Peones' },
  { value: 'underAge', label: 'Trabajadores menores de dieciocho años' },
]

export const FAMILY_STATUS = [
  { value: 'single', label: 'Soltero' },
  { value: 'married', label: 'Casado' },
  { value: 'divorced', label: 'Divorciado o separado' },
  { value: 'widow', label: 'Viudo' },
]

export const DISCAPACITY_TYPE = [
  { value: 'none', label: 'Sin discapacidad' },
  { value: 'minor', label: 'Entre el 33% y el 65%' },
  { value: 'max', label: 'Mayor a 65%' },
]

export const CHILDREN_IN_CHARGE = [
  { value: 'none', label: '0' },
  { value: 'one', label: '1' },
  { value: 'more', label: 'Más de uno' },
]

export const TIME_WORKED = [
  { value: '0', label: 'Hasta 89' },
  { value: '1', label: 'De 90 a 119' },
  { value: '2', label: 'De 120 a 149' },
  { value: '3', label: 'De 150 a 179' },
  { value: '4', label: 'De 180 a 359' },
  { value: '5', label: 'De 360 a 539' },
  { value: '6', label: 'De 540 a 719' },
  { value: '7', label: 'De 720 a 899' },
  { value: '8', label: 'De 900 a 1079' },
  { value: '9', label: 'De 1080 a 1259' },
  { value: '10', label: 'De 1260 a 1439' },
  { value: '11', label: 'De 1440 a 1619' },
  { value: '12', label: 'De 1620 a 1799' },
  { value: '13', label: 'De 1800 a 1989' },
  { value: '14', label: 'De 1990 a 2159' },
  { value: '15', label: 'Más de 2160' },
]

export const NONE_MIN = 501.89
export const NONE_MAX = 1098.09
export const ONE_MIN = 671.40
export const ONE_MAX = 1254.86
export const MORE_MIN = 671.40
export const MORE_MAX = 1411.83