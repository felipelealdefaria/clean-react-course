import { styled } from '@/main/config/stitches.config'

export const WrapperFeedback = styled('div', {
  mt: 16,
  textAlign: 'center',

  span: {
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
