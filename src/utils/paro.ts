import { MORE_MAX, MORE_MIN, NONE_MAX, NONE_MIN, ONE_MAX, ONE_MIN } from "../constants";
import { GetParoProps } from "../types";

export const paroCalculator = ({averageSalary, childInCharge}: GetParoProps) => {

  let paro = averageSalary * 0.70

  switch (childInCharge) {
    case 'none':
      if (paro < NONE_MIN) paro = NONE_MIN
      if (paro > NONE_MAX) paro = NONE_MAX
      break;
    case 'one':
      if (paro < ONE_MIN) paro = ONE_MIN
      if (paro > ONE_MAX) paro = ONE_MAX
      break;
    case 'more':
      if (paro < MORE_MIN) paro = MORE_MIN
      if (paro > MORE_MAX) paro = MORE_MAX
      break;
  }

  return paro
}