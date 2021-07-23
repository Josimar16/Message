import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import { AsideProvider } from '../hooks/Aside';
import { ModalProvider } from '../hooks/Modal';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AsideProvider>
        <ModalProvider>
          <Component {...pageProps} />
        </ModalProvider>
      </AsideProvider>
    </ChakraProvider>
  );
}
export default MyApp
