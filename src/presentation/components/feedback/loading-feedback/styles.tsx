import { styled } from '@/main/config/stitches.config'

export const WrapperFeedback = styled('div', {
  textAlign: 'center',

  span: {
    mt: 16,
    color: '$primary'
  },

  variants: {
    error: {
      true: {
        '> span': {
          display: 'block'
        }
      },
      false: {
        '> span': {
          display: 'none'
        }
      }
    }
  }
})
