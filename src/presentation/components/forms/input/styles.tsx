import { styled } from '@/main/config/stitches.config'

export const WrapperInput = styled('div', {
  mt: 22,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',

  input: {
    br: 4,
    py: 5,
    px: 10,
    width: '100%',
    lineHeight: '40px',
    border: '1px solid $primary_light',

    '&:focus': {
      outlineColor: '$primary_light'
    }
  },

  span: {
    fontSize: 10,
    right: '10px',
    cursor: 'help',
    position: 'absolute'
  },

  'input.valid': {
    border: '1px solid green'
  },

  'input.invalid': {
    border: '1px solid red'
  }
})

export const ErrorField = styled('span', {
  left: '2px',
  color: 'red',
  fontSize: 10,
  bottom: '-15px',
  position: 'absolute'
})
