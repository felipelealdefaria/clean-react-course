/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useReducer, useState } from 'react'

import * as S from './styles'
import { validateForm } from '@/validation/yup-validation'
import { reducer, initialState } from './utils/signin-reducer'
import { Input, Button, LoadingFeedback } from '@/presentation/components'

type UserDataProps = {
  email: string
  password: string
}

export const SignIn: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const [disableButton, setDisableButton] = useState<boolean>(true)
  const [userData, setUserData] = useState<UserDataProps>({ email: '', password: '' })

  React.useEffect(() => {
    return () => {
      setDisableButton(true)
    }
  }, [])

  const onChangeValue = (value: string, name: string): void => {
    setUserData({ ...userData, [name]: value })
  }

  const onBlurValidation = async (): Promise<void> => {
    const resForm = await validateForm(userData)
    setDisableButton(!resForm.valid)
  }

  const handleSubmit = async (): Promise<any> => {
    dispatch({ type: 'loading', payload: '...' })
    const res = await validateForm(userData)

    return dispatch({
      type: res.valid ? 'success' : 'error',
      payload: res.valid ? 'We found your account!' : `${res?.message} || error`
    })
  }

  return (
    <S.Form>
      <Input
        required
        name='email'
        type='email'
        placeholder='E-mail'
        value={userData.email}
        onBlur={onBlurValidation}
        onChange={(e) => onChangeValue(e.target.value, 'email')}
      />
      <Input
        required
        name='password'
        type='password'
        placeholder='Password'
        value={userData.password}
        onBlur={onBlurValidation}
        onChange={(e) => onChangeValue(e.target.value, 'password')}
      />

      {/* <S.Link>Forget your password?</S.Link> */}

      <div
        style={{
          marginTop: '42px'
        }}
      >
        <Button
          type='submit'
          text="SIGN IN"
          onClick={handleSubmit}
          disabled={disableButton}
        />
        <LoadingFeedback
          state={state}
          loaderColor={'default'}
          loader='spinner-dots'
        />
      </div>
    </S.Form>
  )
}
