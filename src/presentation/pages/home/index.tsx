/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react'
import * as S from './styles'

import { SignIn } from '@/presentation/pages'
import { Logo } from '@/presentation/assets/images'
import { Button, ButtonOutline } from '@/presentation/components/forms/buttons'

type FormTypes = {
  sign_in: boolean
  sign_up: boolean
}

export const Home: React.FC = (): JSX.Element => {
  const [handleState, setHandleState] = useState<FormTypes>({
    sign_in: false,
    sign_up: false
  })

  const openForm = (formType: ('sign_in' | 'sign_up')): void => {
    if (formType === 'sign_in') setHandleState({ sign_in: true, sign_up: false })
    if (formType === 'sign_up') setHandleState({ sign_in: false, sign_up: true })
    window.history.pushState('', `Clean Code - ${formType}`, `/${formType}`)
  }

  const { sign_in, sign_up } = handleState

  return (
    <S.Container>
      <S.WrapperCard color={(sign_in || sign_up) ? 'open' : 'closed'}>
        <S.WrapperButtons className={(sign_in || sign_up) ? 'not-visible' : 'default'}>
          <div>
            <Logo />
          </div>
          <div>
            <h2>Log in or register</h2>
            <Button
              type="button"
              text='SIGN IN'
              disabled={false}
              onClick={
                () => openForm('sign_in')
              }
            />
            <ButtonOutline
              type="button"
              text='SIGN UP'
              disabled={false}
              onClick={
                () => openForm('sign_up')
              }
            />
          </div>
        </S.WrapperButtons>

        <S.WrapperForms className={(!sign_in && !sign_up) ? 'not-visible' : 'default'}>
          <S.WrapperHeader>
            <Logo />
            <span>
              Project developed with the intention of applying
              {' '}<b>Clean Architecture</b> concepts,
              {' '}<b>S.O.L.I.D.</b> principles
              {' '}and <b>TDD</b>
            </span>
          </S.WrapperHeader>
          {sign_in && <SignIn />}
          {sign_up && <input type="text" value="cadastrar" />}
        </S.WrapperForms>
      </S.WrapperCard>
    </S.Container>
  )
}
