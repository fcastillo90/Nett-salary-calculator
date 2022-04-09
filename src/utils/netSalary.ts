import { NettSalaryProps, NettSalaryCalculator} from "../types"
import { getIRPF, IRPF_TOTAL, PERCENTAGES, VALUES } from "./irpf"
import { getSS } from "./ss"

export const nettSalaryCalculator = (props: NettSalaryProps): NettSalaryCalculator => {
  const {anualSalary, numberOfPays, employmentType} = props

  const irpfSet = getIRPF(anualSalary)
  const ss = getSS(employmentType)
  const anualSS = anualSalary * (ss / 100)

  // anual salary 50000
  let restante = anualSalary
  let totalDiscounts = 0
  let irpf = '0'
  let anualIRPF = 0

  if (irpfSet > 0) {
    restante -= IRPF_TOTAL[irpfSet-1]
    totalDiscounts = VALUES[irpfSet-1] + (restante * PERCENTAGES[irpfSet] / 100)
    anualIRPF = totalDiscounts - anualSS
    irpf = (anualIRPF*100/anualSalary).toFixed(2)

  } else {
    totalDiscounts = anualSS
  }
  
  const totalGross = anualSalary - totalDiscounts

  const monthlySalary = totalGross/numberOfPays

  
  return {monthlySalary, irpf, ss, anualIRPF, anualSS}
}

export const initNettSalaryValues = {
  monthlySalary: 0,
  irpf: '0',
  anualIRPF: 0,
  ss: 0,
  anualSS: 0,
}