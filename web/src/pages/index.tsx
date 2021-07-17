import Head from 'next/head';
import { Box, Flex, Stack } from '@chakra-ui/react';

import { Sidebar } from '../components/Sidebar';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Portfólio</title>
        <meta name="description" content="Home do app de Portfólio" />
      </Head>
      <Box
        as={Flex}
        bg="gray.50"
        justifyContent="center"
        alignItems="center"
      >
        <Stack
          width="1480px"
          height="100%"
          marginX="1.25rem"
          marginY="2.5rem"
          borderRadius={8}
        >
          <Sidebar />
        </Stack>
      </Box>
    </>
  )
}
