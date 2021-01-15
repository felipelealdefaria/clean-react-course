/* eslint-disable @typescript-eslint/no-unused-vars */
import { schema, ValidationProps } from '@/validation/yup-validation'

// validate single element field
export const validateField = async (path: string, obj: Object): Promise<ValidationProps> => {
  return await schema.validateAt(path, obj)
    .then(() => {
      return { valid: true, field: path }
    })
    .catch((err) => {
      const formatError = err.toString().split('at createError').shift()
      const error = formatError.split(':').pop()
      return { valid: false, field: path, message: error }
    })
}
