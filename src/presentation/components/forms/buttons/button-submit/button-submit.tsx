/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

type ButtonSubmitProps = {
  state?: any
  text: string
  onClick?: any
  type: ('submit' | 'button' | 'reset')
}

export const ButtonSubmit: React.FC<ButtonSubmitProps> = (props: ButtonSubmitProps) => {
  const { state, type, text, onClick } = props
  return (
    <S.ButtonWrapper>
      <button
        type={type}
        onClick={onClick}
        data-test-id="signin-button"
        disabled={state.isFormInvalid}
      >
        {text}
      </button>
    </S.ButtonWrapper>
  )
}
