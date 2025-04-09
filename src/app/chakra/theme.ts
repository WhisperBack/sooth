import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Geist Variable', sans-serif`,
    body: `'Geist Variable', sans-serif`,
  },
})

export default theme