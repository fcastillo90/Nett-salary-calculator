export const getIRPF = (anualSalary: number): number => {
  if (anualSalary <= FIRST) {
    return 0
  } 
  if (anualSalary <= SECOND) {
    return 1
  } 
  if (anualSalary <= THIRD) {
    return 2
  } 
  if (anualSalary <= FOURTH) {
    return 3
  } 
  if (anualSalary <= FIFTH) {
    return 4
  } 
  return 5
}

export const FIRST = 12450
export const SECOND = 20200
export const THIRD = 35200
export const FOURTH = 60000
export const FIFTH = 300000

export const FIRST_PERCENTAGE = 19
export const SECOND_PERCENTAGE = 24
export const THIRD_PERCENTAGE = 30
export const FOURTH_PERCENTAGE = 37
export const FIFTH_PERCENTAGE = 45
export const SIXTH_PERCENTAGE = 45

export const FIRST_DIFF = FIRST // 12450
export const SECOND_DIFF = SECOND-FIRST // 7750
export const THIRD_DIFF = THIRD-SECOND // 15000
export const FOURTH_DIFF = FOURTH-THIRD // 24800
export const FIFTH_DIFF = FIFTH-FOURTH // 240000

export const IRPF_TOTAL = [ FIRST, SECOND, THIRD, FOURTH, FIFTH ]

export const FIRST_VALUE = FIRST_DIFF*FIRST_PERCENTAGE/100
export const SECOND_VALUE = FIRST_VALUE + SECOND_DIFF*SECOND_PERCENTAGE/100
export const THIRD_VALUE = SECOND_VALUE + THIRD_DIFF*THIRD_PERCENTAGE/100
export const FOURTH_VALUE = THIRD_VALUE + FOURTH_DIFF*FOURTH_PERCENTAGE/100
export const FIFTH_VALUE = FOURTH_VALUE + FIFTH_DIFF*FIFTH_PERCENTAGE/100

export const SECTIONS = [FIRST_DIFF, SECOND_DIFF, THIRD_DIFF, FOURTH_DIFF, FIFTH_DIFF]

export const PERCENTAGES = [FIRST_PERCENTAGE, SECOND_PERCENTAGE, THIRD_PERCENTAGE, FOURTH_PERCENTAGE, FIFTH_PERCENTAGE, SIXTH_PERCENTAGE]

export const VALUES = [FIRST_VALUE, SECOND_VALUE, THIRD_VALUE, FOURTH_VALUE, FIFTH_VALUE]