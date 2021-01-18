/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import { cleanup, render, fireEvent, RenderResult } from '@testing-library/react'

import { Login } from '../'
import { act } from 'react-dom/test-utils'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Login />)
  // act(() => { sut = render(<Login />) })
  return { sut }
}

describe('Login Component ', () => {
  test('Should start with initial state', () => {
    afterEach(cleanup)
    const { sut } = makeSut()

    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.textContent).toBe('⚪️')

    const emailError = sut.getByTestId('email-error')
    expect(emailError.textContent).toBe('')

    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.textContent).toBe('⚪️')

    const passwordError = sut.getByTestId('password-error')
    expect(passwordError.textContent).toBe('')

    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  test('Should call Validation with incorrect values', () => {
    const { sut } = makeSut()

    const emailInput = sut.getByTestId('email-input') as HTMLInputElement
    const emailStatus = sut.getByTestId('email-status')
    act(() => {
      fireEvent.change(emailInput, { target: { value: 'testeteste.com' } })
      fireEvent.blur(emailInput)
    })
    expect(emailInput.value).toBe('testeteste.com')
    // expect(emailStatus.textContent).toBe('🔴')

    const submitButton = sut.getByTestId('submit-button') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })
})
