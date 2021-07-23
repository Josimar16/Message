import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false
}

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg:'linear(#D2E0E0 0%, #D2E0E0 25%, #D2E0E0 85%, #ADCCCC 85%)',
        color: '#444E7A'
      }
    }
  }
});