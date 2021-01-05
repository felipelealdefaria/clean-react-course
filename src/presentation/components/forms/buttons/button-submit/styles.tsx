import { styled } from '@/main/config/stitches.config'

export const ButtonWrapper = styled('div', {
  width: '100%',

  button: {
    br: 8,
    mt: 32,
    fontSize: 16,
    width: '100%',
    border: 'none',
    bg: '$primary',
    color: '$white',
    lineHeight: '60px',

    '&:hover': {
      opacity: 0.9
    },

    '&:disabled': {
      bg: '$disabled',
      color: '#f9f9f9',

      '&:hover': {
        opacity: 1
      }
    }
  }
})
