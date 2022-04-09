import { EmploymentType } from "../types";

export const getSS = (employmentType: EmploymentType) => {
  if (employmentType === EmploymentType.GENERAL) {
    return 6.7;
  }
  return 6.70;
}