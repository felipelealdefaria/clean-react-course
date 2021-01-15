/* eslint-disable @typescript-eslint/no-unused-vars */
import { schema, ValidationProps } from '@/validation/yup-validation'

// validate all the form
export const validateForm = async (obj: Object): Promise<ValidationProps> => {
  return await schema.validate(obj)
    .then(() => {
      return { valid: true }
    })
    .catch((err) => {
      return { valid: false, message: err }
    })
}
