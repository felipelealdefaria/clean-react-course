import { styled } from '@/main/config/stitches.config'

export const Container = styled('div', {
  mt: 40,
  position: 'relative',
  borderBottom: '2px dashed $disabledColor',

  '&[data-status="valid"]': {
    borderBottomColor: '$valid',

    '&::after': {
      backgroundColor: '$valid'
    }
  },

  '&[data-status="invalid"]': {
    borderBottomColor: '$invalid',

    '&::after': {
      backgroundColor: '$invalid'
    }
  },

  '&::after': {
    content: '',
    width: '100%',
    height: 2,
    bg: '$disabledColor',
    position: 'absolute',
    bottom: -2,
    left: 0,
    transformOrigin: '0%',
    transform: 'scaleX(0)',
    transition: 'transform 400ms ease'
  },

  '&:focus-within': {
    borderColor: 'transparent',

    '&::after': {
      transform: 'scaleX(1)'
    },

    label: {
      transform: 'scale(0.9) translateY(-20px)'
    }
  },

  input: {
    width: '100%',
    lineHeight: 24,
    p: '0px 40px 0px 8px',

    '&:not(:placeholder-shown) + label': {
      transform: 'scale(0.9) translateY(-20px)'
    }
  },

  label: {
    position: 'absolute',
    left: 8,
    color: '$disabledColor',
    cursor: 'text',
    transformOrigin: '0%',
    transform: 'translateY(0px)',
    transition: 'transform 400ms ease'
  },

  '&.status': {
    position: 'absolute',
    right: 8,
    fontSize: 10,
    cursor: 'help'
  }
})
