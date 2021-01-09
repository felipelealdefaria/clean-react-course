import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string()
    .email('Wrong email')
    .required('The field e-mail is required'),
  password: yup.string()
    .required('The field password is required')
    .min(8, 'Password is too short - should be 8 chars minimum.')
})

export const isValid = (obj: Object): any => {
  return schema.validate(obj)
    .then((res) => {
      return { valid: true, message: res }
    })
    .catch((err) => {
      return { valid: false, message: err }
    })
}
