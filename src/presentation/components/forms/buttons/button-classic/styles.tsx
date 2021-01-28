import { styled } from '@/main/config/stitches.config'

export const ButtonWrapper = styled('div', {
  width: '100%',

  button: {
    br: 8,
    mt: 20,
    fontSize: 16,
    width: '100%',
    bg: '#9177FA',
    color: '$white',
    cursor: 'pointer',
    lineHeight: '30px',
    padding: '8px 16px',
    border: '1px solid #9177FA',

    '&:hover': {
      opacity: 0.9
    },

    '&:disabled': {
      opacity: 0.5,
      bg: '#9177FA',
      color: '#f9f9f9',

      '&:hover': {
        opacity: 1
      }
    }
  }
})
