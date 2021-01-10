import * as yup from 'yup'

export type ValidationProps = {
  valid: boolean
  field?: string
  message?: string
}

const schema = yup.object().shape({
  email: yup.string()
    .email('Wrong email')
    .required('The field e-mail is required'),
  password: yup.string()
    .required('The field password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
})

export const validateForm = async (obj: Object): Promise<ValidationProps> => {
  return await schema.validate(obj)
    .then(() => {
      return { valid: true }
    })
    .catch((err) => {
      return { valid: false, message: err }
    })
}

export const validateField = async (path: string, obj: Object): Promise<ValidationProps> => {
  return await schema.validateAt(path, obj)
    .then(() => {
      return { valid: true, field: path }
    })
    .catch((err) => {
      return { valid: false, field: path, message: err }
    })
}
