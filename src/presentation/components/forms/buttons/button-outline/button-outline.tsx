import React from 'react'
import * as S from './styles'

type Props =
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement> & {
    text: string
    disabled: boolean
  }

export const ButtonOutline: React.FC<Props> = (props: Props) => {
  const { disabled, type, text, onClick } = props
  return (
    <S.ButtonWrapper>
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        data-testid="button-outline"
      >
        {text}
      </button>
    </S.ButtonWrapper>
  )
}
