import { styled } from '@/main/config/stitches.config'

export const WrapperInput = styled('div', {
  mt: 25,
  width: '100%',
  display: 'grid',
  textAlign: 'left',
  position: 'relative',

  label: {
    mb: '5px',
    fontSize: '12px',
    color: '#9177FA'
  },

  input: {
    br: 4,
    bg: 'transparent',
    lineHeight: '40px',
    padding: '5px 10px',
    border: '1px solid #9177FA',

    '&:focus': {
      outlineColor: '#9177FA'
    }
  },

  span: {
    top: '40px',
    fontSize: 8,
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

export const ErrorField = styled('p', {
  margin: 0,
  left: '2px',
  color: 'red',
  fontSize: 12,
  bottom: '-18px',
  position: 'absolute'
})
