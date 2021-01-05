import React from 'react'
import * as S from './styles'

type Props =
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement> & {
    state?: any
    text: string
  }

export const ButtonSubmit: React.FC<Props> = (props: Props) => {
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
