/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'
import faker from 'faker'
import { render, fireEvent, RenderResult, waitFor } from '@testing-library/react'

import { Input } from '@/presentation/components/forms/input/input'

type SutTypes = {
  sut: RenderResult
}

const mockInput = {
  type: 'email',
  onChange: jest.fn(),
  name: faker.lorem.word(),
  placeholder: faker.lorem.word()
}

jest.mock('@/validation/yup-validation', () => {
  return {
    validateField: () => {
      return { valid: false, field: mockInput.name, message: 'Wrong email' }
    }
  }
})

const makeSut = (): SutTypes => {
  const sut = render(<Input {...mockInput} />)
  return { sut }
}

describe('Input Component ', () => {
  test('Should start with initial state', () => {
    const { sut } = makeSut()

    const inputStatus = sut.getByTestId(`${mockInput.name}-status`)
    expect(inputStatus.textContent).toBe('⚪️')

    const inputError = sut.getByTestId(`${mockInput.name}-error`)
    expect(inputError.textContent).toBe('')
  })

  test('Should call Validation with incorrect values', async () => {
    const { sut } = makeSut()
    const mockEmail = faker.lorem.word()

    const inputError = sut.getByTestId(`${mockInput.name}-error`)
    const inputStatus = sut.getByTestId(`${mockInput.name}-status`)
    const input = sut.getByTestId(`${mockInput.name}-input`) as HTMLInputElement

    fireEvent.change(input, { target: { value: mockEmail } })
    fireEvent.blur(input)

    await waitFor(() => {
      expect(input.value).toBe(mockEmail)
      expect(inputError.textContent).toBe('Wrong email')
      expect(inputStatus.textContent).toBe('🔴')
    })
  })
})
