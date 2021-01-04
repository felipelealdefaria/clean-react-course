/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import * as S from './styles'

type ButtonSubmitProps = {
  state: any
  text: string
}

export const ButtonSubmit: React.FC<ButtonSubmitProps> = ({ state, text }: ButtonSubmitProps) => {
  return (
    <S.Container>
      <button
        type='submit'
        data-test-id="submit"
        disabled={state.isFormInvalid}
      >
        {text}
      </button>
    </S.Container>
  )
}
