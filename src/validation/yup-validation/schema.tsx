import * as yup from 'yup'

export type ValidationProps = {
  valid: boolean
  field?: string
  message?: string
}

export const schema = yup.object().shape({
  email: yup.string()
    .email('Wrong email')
    .required('The field e-mail is required'),
  password: yup.string()
    .required('The field password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
})
