import { createStyled } from '@stitches/react'

export const { styled, css } = createStyled({
  prefix: 'clean-code',
  tokens: {
    colors: {
      $white: '#fff',
      $dark: '#1d2026',
      $light_grey: '#f2f2f2',

      $primary: '#880e4f',
      $primary_dark: '#560027',
      $primary_light: '#bc477b'
    }
  },
  breakpoints: {
    mob: (rule) => `@media (min-width: 320px) { ${rule} }`,
    sm: (rule) => `@media (min-width: 640px) { ${rule} }`,
    md: (rule) => `@media (min-width: 768px) { ${rule} }`,
    lg: (rule) => `@media (min-width: 1024px) { ${rule} }`,
    xl: (rule) => `@media (min-width: 1280px) { ${rule} }`
  },
  utils: {
    m: () => (value) => ({
      marginTop: value,
      marginBottom: value,
      marginLeft: value,
      marginRight: value
    }),
    mt: () => (value) => ({
      marginTop: value
    }),
    mr: () => (value) => ({
      marginRight: value
    }),
    mb: () => (value) => ({
      marginBottom: value
    }),
    ml: () => (value) => ({
      marginLeft: value
    }),
    mx: () => (value) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: () => (value) => ({
      marginTop: value,
      marginBottom: value
    }),
    p: () => (value) => ({
      paddingTop: value,
      paddingBottom: value,
      paddingLeft: value,
      paddingRight: value
    }),
    pt: () => (value) => ({
      paddingTop: value
    }),
    pr: () => (value) => ({
      paddingRight: value
    }),
    pb: () => (value) => ({
      paddingBottom: value
    }),
    pl: () => (value) => ({
      paddingLeft: value
    }),
    px: () => (value) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: () => (value) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    size: () => (value) => ({
      width: value,
      height: value
    }),
    linearGradient: () => (value) => ({
      backgroundImage: `linear-gradient(${value})`
    }),
    br: () => (value) => ({
      borderRadius: value
    }),
    bg: () => (value) => ({
      backgroundColor: value
    })
  }
})
