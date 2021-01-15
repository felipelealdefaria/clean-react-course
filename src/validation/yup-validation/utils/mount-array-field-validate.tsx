/* eslint-disable @typescript-eslint/no-unused-vars */
import { ValidationProps } from '@/validation/yup-validation'

// create [{}] with ValidationProps for each field
export const mountArrayFieldValidate = (statusField: ValidationProps[], resField: ValidationProps): ValidationProps[] => {
  if (statusField.find(el => el.field === resField.field)) {
    const findFieldIndex = statusField.findIndex(el => el.field === resField.field)
    const newArr = [...statusField]
    newArr[findFieldIndex] = resField
    return newArr
  } else {
    return [...statusField, resField]
  }
}
